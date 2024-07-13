import { useState } from 'react';
import Modal from '../../components/Modal/Modal'; 
import UpdateProductForm from '../Form/UpdateProductForm';
import { toast } from 'sonner';
import { useUpdateProductMutation } from '../../redux/api/baseApi';
import { TProduct } from '../../types';

interface UpdateProductModalProps {
  isOpen: boolean;
  setIsEditModalOpen: (isOpen: boolean) => void;
  product: TProduct;
  id: string;
}

const UpdateProductModal = ({ isOpen, setIsEditModalOpen, product, id }: UpdateProductModalProps) => {
  const [loading, setLoading] = useState(false);
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (data : TProduct) => {
    setLoading(true);
    try {
      await updateProduct({ id, data }).unwrap();
      toast.success("Product updated successfully");
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsEditModalOpen}
      title="Update Product"
    >
      <UpdateProductForm
        handleSubmit={handleSubmit}
        loading={loading}
        defaultValues={product}
      />
    </Modal>
  );
};

export default UpdateProductModal;