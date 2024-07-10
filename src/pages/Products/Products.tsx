import Container from "../../components/Container/Container";
import ProductCard from "../../components/ProductCard/ProductCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useGetProductsQuery } from "../../redux/api/baseApi";
import { TProduct } from "../../types";
const Products = () => {

    const { data: products, isLoading } = useGetProductsQuery({});

    if (isLoading) {
        return (
          <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
            Loading....
          </p>
        );
      }
    return (
        <Container>
            <SectionTitle heading="All Products" subHeading="Enhanced Your Tech Experience With ClickCraft"/>

            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.data?.map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
        </Container>
    );
};

export default Products;