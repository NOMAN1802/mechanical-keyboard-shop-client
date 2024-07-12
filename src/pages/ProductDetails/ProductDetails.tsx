import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";


const ProductDetails = () => {

    const product = useLoaderData();
    const{title,image,price,rating,category,description,availableQuantity,brand} = product?.data;
   
    const dispatch = useAppDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(product.data));
        toast.success(`${product?.data.title} added in to cart`)
      };
    return (
        <Container>
            <PageTitle heading={title} subHeading={brand}/>
           <div className=" mt-20">
            <div className=" flex flex-col md:flex-row  gap-6">
                <div className="w-full lg:w-3/6 ">
                <img src={image} alt="image" className="h-full lg:h-[500px] w-full lg:w-[650px]" />
                </div>
                <div className="w-full lg:w-3/6  ">
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-center w-full mt-10 font-bold underline ">{title}</h1>
                    <h2 className="text-xl font-bold ml-4 mt-10">Attention:</h2>
                    <p className="ml-4">{description}</p>
                    <h2 className="ml-4 mt-10 text-2xl">TK {price}</h2>
                    {/* <button className="btn mt-10 ml-4 bg-green-800 text-white hover:bg-green-700 font-bold border-none">Add To Cart</button> */}

                    <button onClick={handleAddToCart} className="mt-10 ml-10 -right-2 -skew-x-12 bg-slate-900 p-1 text-sm text-white opacity-90 hover:bg-slate-700     hover:opacity-100 focus:outline-none cursor-pointer">
                  Add to Cart
                 </button>
                    <h2 className="ml-4 text-xl mt-10"><span className="font-bold">In Stock:</span> {availableQuantity} piece only</h2>
                </div>
            </div>

        </div>
        </Container>
    );
};

export default ProductDetails;