import Container from '../../../components/Container/Container';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useLocation } from 'react-router-dom';
import Heading from '../../../components/Heading/Heading';
import { useGetProductsQuery } from '../../../redux/api/baseApi';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
  const location = useLocation();
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );
  }

  return (
    <Container>
      <SectionTitle
        subHeading={
          location.pathname === '/dashboard/manage-products'
            ? 'Manage Product'
            : 'No Product Found!'
        }
        heading="Manage Product"
      />
      {products?.data && products?.data?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded my-6">
            {/* Head */}
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Photo</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Brand</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Delete</th>
                <th className="py-3 px-6 text-left">Update</th>
              </tr>
            </thead>
            {/* Body */}
            <tbody className="text-gray-700">
              {products?.data?.map((product) => (
                <ManageProductRow key={product._id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title={
              location.pathname === '/dashboard/manage-products'
                ? 'No activity found'
                : 'You have not added any products yet!'
            }
            subtitle={
              location.pathname === '/dashboard/manage-products'
                ? 'Go to add products and start selling!'
                : 'Explore ClickCraft and add your products.'
            }
            center={true}
          />
        </div>
      )}
    </Container>
  );
};

export default ManageProducts;
