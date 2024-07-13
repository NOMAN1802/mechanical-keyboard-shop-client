/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState,useEffect } from "react";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import SingleCart from "../../components/SingleCart/SingleCart";


const Cart = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const { data: products, isLoading } = useGetProductsQuery(undefined);
    const { totalOrderPrice } = useAppSelector((state) => state.cart);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (isLoading) return;
    
        //! Check product availability
        const outOfStockItems = cartItems.filter((cartItem) => {
          const product = products.data.find(
            (item: any) => item._id === cartItem._id
          );
          return product
            ? cartItem.availableQuantity > product.availableQuantity
            : true;
        });
    
        setIsButtonDisabled(outOfStockItems.length > 0);
      }, [cartItems, products, isLoading]);
    
      const handleProceedCheckout = () => {
        navigate("/checkout");
      };
  
    const navigate = useNavigate();
    return (
        <Container>
           <PageTitle heading="Cart Page" subHeading="One step closer to get the product"/> 

           <div className="md:px-12 w-full p-4 mt-12 mb-12  rounded-md ">
      <div>
        {cartItems.length > 0 && (
          <h2 className="text-3xl mb-7 font-bold text-center text-slate-600">
            My Product Cart - <span className=""> {cartItems.length}</span>
          </h2>
        )}

        {cartItems?.length > 0 ? (
          <div className="bg-slate-200  w-full h-full space-y-3 rounded-md p-[5px] ">
            <div className="bg-slate-200 rounded-md p-4  space-y-3  w-full h-full ">


           <table className="min-w-full bg-slate-200 shadow-md rounded my-6">
             {/* Head */}
            <thead className="bg-slate-700 text-slate-100">
              <tr>
                <th className="py-3 px-6 text-left">Photo</th>
                <th className="py-3 px-6 text-left">Title</th>
                {/* <th className="py-3 px-6 text-left">Brand</th> */}
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Actions</th>
                <th className="py-3 px-6 text-left">Delete</th>
                
              </tr>
            </thead>
            <tbody className="text-slate-700">
                  {cartItems?.length > 0 &&
                    
                    cartItems?.map((cart: any) => <SingleCart cart={cart} />)}
                    </tbody>
                    </table>
               
            </div>
            <div>
              <h2 className="text-slate-600 text-end mx-12 text-lg font-medium">
                Total Price: ${totalOrderPrice.toFixed(2)}
              </h2>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-y-6 items-center justify-center bg-slate-200 h-96 px-4">
            <p className="border-[1px] border-darkText w-full p-2 text-center rounded-md text-slate-600">
              Your product cart is empty
            </p>
            <Link to="/products">
              <button className="bg-darkText text-slate-600 py-2 px-6 rounded-md hover:bg-slate-800 duration-200">
                Return to Shop
              </button>
            </Link>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-end mx-auto mt-8">
          <button
            onClick={handleProceedCheckout}
            className={`text-slate-200 text-sm font-semibold mx-auto rounded px-3 py-2 bg-slate-600 hover:bg-slate-800 ${
              isButtonDisabled
                ? "opacity-50 bg-slate-300 cursor-not-allowed"
                : ""
            }`}
            disabled={isButtonDisabled ? true : false}
          >
            Proceed To Checkout{" "}
          </button>
        </div>
      )}
    </div>
            
        </Container>
    );
};

export default Cart;