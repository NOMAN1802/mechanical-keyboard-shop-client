import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/features/cart/cartSlice";
import ConfirmDialog from "../../utils/confirmDialog";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";

export type TTodoCartProps = {
    cart: {
      _id: string;
      image: string;
      title: string;
      brand: string;
      availableQuantity: number;
      price: number;
      rating: number;
      description: string;
      cartQuantity: number;
    };
  };

const SingleCart = ({ cart }: TTodoCartProps) => {

    const dispatch = useAppDispatch();

    const handleDelete = (cartId: string) => {
        toast.custom((t) => (
          <ConfirmDialog
            message="Remove from cart?"
            description="Are you sure you want to remove this item from your cart?"
            onCancel={() => toast.dismiss(t?.id)}
            onConfirm={() => {
              dispatch(removeFromCart(cartId));
              toast.success("The item has been removed from your cart.");
              toast.dismiss(t?.id);
            }}
          />
        ));
      };

      const handleIncrease = (cartId: string) => {
        dispatch(incrementQuantity(cartId));
      };
    
      const handleDecrease = (cartId: string) => {
        dispatch(decrementQuantity(cartId));
      };
    
    return (
        <tr key={cart._id} className="border-b border-slate-200 hover:bg-slate-100">

      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                className="w-full h-full object-cover rounded-full"
                src={cart.image}
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-6 text-left">{cart?.title}</td>
      <td className="py-3 px-6 text-left">{cart?.availableQuantity}</td>
      <td className="py-3 px-6 text-left">{cart?.price}</td>
      <td className="py-3 px-6 text-left">
      <div className="px-2 py-1 rounded-md flex items-center w-full   border border-darkText">
          <FaPlus
            onClick={() => handleIncrease(cart?._id)}
            className="text-slate-600 mx-2 text-sm cursor-pointer"
          />
          <div className="text-darkText  text-3xl"> | </div>
          <FaMinus
            onClick={() => handleDecrease(cart?._id)}
            className="text-slate mx-2  text-sm cursor-pointer"
          />
        </div>
      </td>
      
      <td className="py-3 px-6 text-left">
      <button
          onClick={() => handleDelete(cart?._id)}
          className="bg-red-500 p-3 rounded-full"
        >
          <RxCross2 className="text-white text-lg" />
        </button>
      </td>
     
    </tr>
    );
};

export default SingleCart;