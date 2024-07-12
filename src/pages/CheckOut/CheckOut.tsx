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

  // handle form change

  // handle place order
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
      }
      // cart reset
      dispatch(resetCart());
      navigate("/confirm-order");
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
        <PageTitle heading="Check out page" subHeading="Provide valid information"/>

      <div className="md:flex items-start gap-8">
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center gap-x-6">
              <div>
                <FaMapMarkerAlt className="text-headerText -mt-4 text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl mb-1 font-bold">
                  Product Delivery Information
                </h2>
                <h2 className="tracking-widest mb-7">
                  We will deliver your order to this address
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
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div className="border md:w-8/12 flex justify-center md:mt-48 items-center border-dashed py-2 mb-4 px-3 mx-auto rounded-md border-headerText">
            <div>
              <h2 className="rounded-md font-medium text-lg p-2 mb-2 text-center">
                Order Total: ${totalOrderPrice.toFixed(2)}
              </h2>
              <h2 className="rounded-md p-2 text-base mb-2 text-center">
                Free Shipping on 200 and above. Just <br /> for you.{" "}
                <NavLink
                  to="/products"
                  className={
                    "text-headerText font-bold hover:underline duration-200"
                  }
                >
                  Order More Products
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;