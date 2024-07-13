import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import StarRating from "../../components/StarRating/StarRating";

type Product = {
  data: {
    _id: string;
    name: string;
    title: string;
    image: string;
    price: number;
    rating: number;
    category: string;
    description: string;
    availableQuantity: number;
    brand: string;
  };
};

const ProductDetails = () => {
  const product: Product | undefined = useLoaderData() as Product | undefined;
  const { title, image, price, rating, category, description, availableQuantity, brand } = product?.data || {};

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product.data));
      toast.success(`${product.data.title} added to cart`);
    } else {
      toast.error("Product details not available");
    }
  };

  return (
    <Container>
      <PageTitle heading={title as string} subHeading={`Manufactured by: ${brand}`} />
      <div className="mt-20">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full lg:w-3/6">
            <img src={image} alt="Product" className="h-full lg:h-[500px] w-full lg:w-[650px]" />
          </div>
          <div className="w-full lg:w-3/6">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-center w-full mt-10 font-bold underline">{title}</h1>
            <h2 className="text-xl font-bold ml-4 mt-10">Attention:</h2>
            <p className="ml-4">{description}</p>
            <button
              onClick={handleAddToCart}
              className="mt-10 ml-5 -right-2 -skew-x-12 bg-slate-900 p-1 text-sm text-slate-100 opacity-90 hover:bg-slate-700 hover:opacity-100 focus:outline-none cursor-pointer"
            >
              Add to Cart
            </button>
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="ml-4 mt-10 text-xl">
                  <span className="font-bold">Price: $</span> {price}
                </h2>
                <h2 className="ml-4 text-xl mt-10">
                  <span className="font-bold">In Stock:</span> {availableQuantity} piece only
                </h2>
              </div>
              <div>
                <h2 className="ml-4 text-xl mt-10">
                  <span className="font-bold">Category:</span> {category}
                </h2>
                <h2 className="ml-4 text-xl mt-10 flex gap-2">
                  <span className="font-bold">Rating:</span>{" "}
                  <StarRating rating={rating as number} />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
