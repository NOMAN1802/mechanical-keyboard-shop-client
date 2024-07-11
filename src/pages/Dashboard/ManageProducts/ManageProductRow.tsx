import { useState } from 'react';
import DeleteModal from '../../../components/Modal/DeleteModal';
import { FaSync, FaTrash } from 'react-icons/fa';
import UpdateProductModal from '../../../components/Modal/UpdateProductModal';
import { toast } from 'sonner';
import { useDeleteProductMutation } from '../../../redux/api/baseApi';
// import { TProduct } from '../../../types';



const ManageProductRow = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalHandler = (item) => {
    deleteProduct(item._id);
    toast.success('Product deleted successfully');
    closeModal();
  };

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                className="w-full h-full object-cover rounded-full"
                src={product?.image}
                alt="Product Image"
              />
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-6 text-left">{product?.title}</td>
      <td className="py-3 px-6 text-left">{product?.brand}</td>
      <td className="py-3 px-6 text-left">{product?.availableQuantity}</td>
      <td className="py-3 px-6 text-left">${product?.price.toFixed(2)}</td>
      <td className="py-3 px-6 text-left">
        <button
          onClick={() => setIsOpen(true)}
          className="text-slate-500 hover:text-slate-700"
        >
          <FaTrash className="inline-block" /> Delete
        </button>
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={() => modalHandler(product)}
          id={product._id}
        />
      </td>
      <td className="py-3 px-6 text-left">
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="text-slate-500 hover:text-slate-700"
        >
          <FaSync className="inline-block" /> Update
        </button>
        <UpdateProductModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          product={product}
          id={product._id}
        />
      </td>
    </tr>
  );
};

export default ManageProductRow;
