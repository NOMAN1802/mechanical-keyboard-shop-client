import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../../redux/features/cart/cartSlice';
import { useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RootState } from '../../redux/store';

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">Action</span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
          </p>
        </div>

        {cart.map((data) => (
          <div key={data._id} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              <div className="img-box">
                <img src={data.image} alt="product" className="xl:w-[140px]" />
              </div>
              <div className="pro-data w-full max-w-sm">
                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{data.title}</h5>
                <p className="font-normal text-lg leading-8 w-1/3 ml-4 lg:w-full text-gray-500 my-2 lg:min-[550px]:my-3 lg:max-[550px]:text-center">
                  Instock: {data.quantity}
                </p>
                <h6 className="font-normal text-lg leading-8 w-1/3 ml-4 lg:w-full text-gray-500 my-2 lg:min-[550px]:my-3 lg:max-[550px]:text-center">
                  Price: ${data.price}
                </h6>
              </div>
            </div>
            <div className="flex flex-row items-center min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
              <button className="w-full lg:w-1/3" onClick={() => dispatch(removeItem(data._id))}>
                <FaRegTrashAlt className="text-black px-2 py-2 size-10 rounded-lg bg-red-500 lg:bg-white w-full" />
              </button>
              <div className="flex items-center mr-0 mx-auto justify-center">
                <button
                  onClick={() => dispatch(decreaseItemQuantity(data._id))}
                  className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path d="M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input
                  type="text"
                  className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                  value={data.number}
                  readOnly
                />
                <button
                  onClick={() => dispatch(increaseItemQuantity(data._id))}
                  className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path d="M11 5.5V16.5M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">Quantity</p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">{totalQuantity}</h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">{totalPrice}</h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
            <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
            Continue to Payment
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
