import { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchSection from '../../components/SearchSection/SearchSection';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useGetProductsQuery } from '../../redux/api/baseApi';
import { TProduct, Filters, SortOption } from '../../types';

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery({});
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [allProducts, setAllProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    if (products) {
      setAllProducts(products.data);
      setFilteredProducts(products.data);
    }
  }, [products]);

  const handleSearch = (searchText: string) => {
    const filtered = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (filters: Filters) => {
    const { category, minPrice, maxPrice } = filters;
    let filtered = allProducts;
    
    if (category !== "All Categories") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (minPrice) {
      filtered = filtered.filter((product) => product.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= parseFloat(maxPrice));
    }

    setFilteredProducts(filtered);
  };

  const handleSort = (sortOption: SortOption) => {
    let sorted = [...filteredProducts];
    
    if (sortOption === "Price: Low to High") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  };

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <Container>
      <SectionTitle heading="All Products" subHeading="Enhanced Your Tech Experience With ClickCraft" />
      <SearchSection onSearch={handleSearch} onFilter={handleFilter} onSort={handleSort} />
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
