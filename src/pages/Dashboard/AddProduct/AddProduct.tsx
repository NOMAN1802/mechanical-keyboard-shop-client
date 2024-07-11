/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { TProduct } from '../../../types';
import AddProductForm from '../../../components/Form/AddProductForm';
import { useAddProductMutation } from '../../../redux/api/baseApi';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../components/PageTitle/PageTitle';

type FormValues = {
  title: string;
  brand: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  availableQuantity: number;
};

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data) => {
    setLoading(true);

    if (data.rating > 5) {
      toast.error('Rating cannot be more than 5');
      setLoading(false);
      return;
    }

   

    try {
      const productData: TProduct = {
        ...data,
        price: parseFloat(data.price.toString()),
        rating: parseFloat(data.rating.toString()),
        
      };

      await addProduct(productData).unwrap();
      toast.success('Product Successfully Added');
      console.log('inside form submission',productData);
      navigate('/dashboard/manage-products');
    } catch (err) {
      console.error(err);
      toast.error('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageTitle heading="Add Product" subHeading="Add Products" />
      <AddProductForm 
           onSubmit={handleSubmit(onSubmit)} t
           register={register}
           errors={errors}
           loading={loading} 
      />
    </div>
  );
};

export default AddProduct;
