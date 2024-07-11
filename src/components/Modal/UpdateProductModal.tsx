import { useState } from 'react';
import { Modal as AntdModal, Button } from 'antd';
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
  const [productData, setProductData] = useState(product);

  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedData = { ...productData };
    delete updatedData._id;
    setLoading(true);
    try {
      await updateProduct({ id, ...updatedData }).unwrap();
      toast.success("Product updated successfully");
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AntdModal
      title="Update Product"
      visible={isOpen}
      onCancel={() => setIsEditModalOpen(false)}
      footer={[
        <Button key="back" onClick={() => setIsEditModalOpen(false)}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
          Update
        </Button>,
      ]}
      centered
    >
      <UpdateProductForm
        handleSubmit={handleSubmit}
        productData={productData}
        setProductData={setProductData}
      />
    </AntdModal>
  );
};

export default UpdateProductModal;
