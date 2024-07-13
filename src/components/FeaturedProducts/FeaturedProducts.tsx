import SectionTitle from "../SectionTitle/SectionTitle";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "../../types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery({});

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );
  }

  console.log('Fetched products:', products);

  const featuredProducts = products?.data
    ?.filter((product: TProduct) => product?.category === 'featured')
    .slice(0, 6);

  console.log('Featured products:', featuredProducts);

  return (
    <div>
      <SectionTitle heading="Featured Products" subHeading="Grab the best one" />
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts?.map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link to="/products">
          <Button label="Show All" />
            
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
