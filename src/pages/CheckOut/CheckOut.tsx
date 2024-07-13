import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetCart } from "../../redux/features/cart/cartSlice";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useAddOrderMutation } from "../../redux/api/baseApi";

const CheckOut = () => {
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [addOrder, { error }] = useAddOrderMutation();

  let errorMessage: string | null = null;
  // @ts-ignore
  if (error?.data?.message) {
    // @ts-ignore
    errorMessage = error.data.message;
  }

  // Calculate total price with potential shipping fee
  const shippingFee = totalOrderPrice < 200 ? totalOrderPrice * 0.05 : 0;
  const totalPriceWithShipping = totalOrderPrice + shippingFee;

  // Handle form submission
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const products = cartItems.map((item) => ({
      product: item._id,
      quantity: item.cartQuantity,
    }));

    const orderData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      address: formData.get("address"),
      payment: formData.get("payment"),
      products,
    };

    try {
      const res = await addOrder(orderData).unwrap();

      if (res?.success === true) {
        toast.success("Order placed successfully", {
          duration: 1500,
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        // Reset cart and navigate to confirmation page
        dispatch(resetCart());
        navigate("/confirm-order");
      }
    } catch (error) {
      toast.error(errorMessage || "Failed to place order", {
        duration: 1500,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Container>
      <PageTitle heading="Check out page" subHeading="Provide valid information" />
      <div className="md:flex items-start gap-8">
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center gap-x-6">
              <div>
                <FaMapMarkerAlt className="text-headerText -mt-4 text-4xl" />
              </div>
              <div>
                <h2 className="text-4xl mb-1 font-semibold">
                  Product Delivery Information
                </h2>
                <h2 className="tracking-widest mb-7">
                  Product will be delivered to your address
                </h2>
              </div>
            </div>
            <form onSubmit={handlePlaceOrder}>
              <div className="mt-6">
                <h2 className="font-semibold">Name*</h2>
                <div className="flex mt-1 justify-center">
                  <input
                    name="name"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-semibold">Email*</h2>
                <div className="flex mt-1 justify-center">
                  <input
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-semibold">Phone Number*</h2>
                <div className="flex mt-1 justify-center">
                  <input
                    name="phoneNumber"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-semibold">Delivery Address*</h2>
                <div className="flex mt-1 justify-center">
                  <input
                    name="address"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-semibold">Payment Method*</h2>
                <div className="flex flex-col mt-1 space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cashOnDelivery"
                      className="form-radio text-headerText"
                      required
                    />
                    <span className="text-lg">Cash on Delivery</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-slate-100 font-medium text-sm mt-8 mx-auto px-12 py-3 rounded-lg bg-slate-600 hover:bg-slate-800 duration-200"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded p-4">
          <div className="border md:w-8/12 flex justify-center md:mt-48 items-center border-dashed py-2 mb-4 px-3 mx-auto rounded-md border-headerText">
            <div>
              <h2 className="rounded-md font-medium text-xl p-2 mb-2 text-center">
                Product Price: ${totalOrderPrice.toFixed(2)}
              </h2>
              <h2 className="rounded-md font-medium text-xl p-2 mb-2 text-center">
                Shipping Fee: ${shippingFee.toFixed(2)}
              </h2>
              <h2 className="rounded-md font-medium text-xl p-2 mb-2 text-center">
                Total Price: ${totalPriceWithShipping.toFixed(2)}
              </h2>
              <h2 className="rounded p-2 text-slate-600 mb-2 text-center">
                Free Shipping on orders of $200 and above. Just <br /> for you.
              </h2>
              <NavLink to="/products">
                <p
                  className={
                    "text-slate-800 text-center font-bold hover:underline duration-200"
                  }
                >
                  Order More Products
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
