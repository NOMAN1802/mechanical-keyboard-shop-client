import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaLandmark } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import StarRating from "../StarRating/StarRating";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import { TProduct } from "../../types";




const ProductCard = ({ product }: { product: TProduct }) => {
  console.log('Product in ProductCard:', product);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
   
    
    dispatch(addToCart(product));
    toast.success(`${product?.title} added in to cart`)
  };
  return (
    <div className="relative rounded overflow-hidden shadow-xl transform hover:scale-110 duration-100">
      <img src={product.image} alt="" className="w-full h-52 object-cover" />

      <div className="absolute top-3 right-3">
     <button onClick={handleAddToCart} className="relative -right-2 -skew-x-12 bg-slate-900 p-1 text-sm text-white opacity-90 hover:bg-slate-700     hover:opacity-100 focus:outline-none cursor-pointer">
     Add to Cart
     </button>
       </div>

      <div className="absolute bottom-40 left-0">
        <p className="relative -right-1 -skew-x-6 bg-slate-500 px-4 py-2 font-bold text-white opacity-25">
          {product?.category}
        </p>
      </div>

      <div className="flex flex-col items-start my-2 py-2 space-y-2">
        <div className="font-semibold text-lg text-slate-600 mx-2">
          {product?.title}
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <p className="mx-2 flex flex-row items-center justify-between gap-2 text-slate-500 text-sm">
            <FaLandmark />
            Brand:{product?.brand}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <p className="mx-2 flex flex-row items-center justify-between gap-2 text-slate-500 text-sm">
              <MdProductionQuantityLimits />
              Quantity: {product?.availableQuantity}
            </p>
          </div>

          <div>
            <p className="mx-2 flex flex-row items-center justify-between gap-2 text-slate-600 text-sm">
              <FaDollarSign />
              Price: {product?.price}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-wrap gap-4 px-2">
            <span className="text-slate-500 text-sm">Rating:</span>
            <StarRating rating={product?.rating} />
          </div>

          <div className="flex flex-wrap gap-4 p-2">
            <Link to={`/products/${product?._id}`}>
              <Button label="View Details" small />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
