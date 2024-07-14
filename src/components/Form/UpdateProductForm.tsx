import { useForm, SubmitHandler } from 'react-hook-form';
import { TbFidgetSpinner } from "react-icons/tb";

type FormValues = {
  _id:string;
  title: string;
  brand: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  availableQuantity: number;
};

interface UpdateProductFormProps {
  handleSubmit: SubmitHandler<FormValues>;
  loading: boolean;
  defaultValues: FormValues;
}

const UpdateProductForm: React.FC<UpdateProductFormProps> = ({ handleSubmit, loading, defaultValues }) => {
  const { register, handleSubmit: formHandleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues
  });

  return (
    <form onSubmit={formHandleSubmit((data) => {
      data.price = parseFloat(data.price.toString());
      data.rating = parseFloat(data.rating.toString());
      handleSubmit(data);
    })}>
      <div className='grid grid-cols-1 gap-10'>
        <div className='space-y-1 text-sm'>
          <label htmlFor='title' className='block text-gray-600'>
            Title
          </label>
          <input
            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
            {...register('title', { required: true })}
            id='title'
            type='text'
            placeholder='Title'
          />
          {errors.title && <p className='text-red-600'>Title is required</p>}
        </div>
        <div className='space-y-1 text-sm'>
          <label htmlFor='brand' className='block text-gray-600'>
            Brand
          </label>
          <input
            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
            {...register('brand', { required: true })}
            id='brand'
            type='text'
            placeholder='Brand'
          />
          {errors.brand && <p className='text-red-600'>Brand is required</p>}
        </div>

        <div className='grid grid-cols-2 justify-between gap-2'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Category
            </label>
            <select
              className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
              {...register('category', { required: true })}
            >
              <option value='regular'>Regular</option>
              <option value='featured'>Featured</option>
            </select>
            {errors.category && <p className='text-red-600'>Category is required</p>}
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='rating' className='block text-gray-600'>
              Rating
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              {...register('rating', { required: true })}
              id='rating'
              type='text'
              placeholder='Rating'
            />
            {errors.rating && <p className='text-red-600'>Rating is required</p>}
          </div>
        </div>
        <div className='flex justify-between gap-2'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='price' className='block text-gray-600'>
              Price
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              {...register('price', { required: true })}
              id='price'
              type='text'
              placeholder='Price'
            />
            {errors.price && <p className='text-red-600'>Price is required</p>}
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='availableQuantity' className='block text-gray-600'>
              Available Quantity
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              {...register('availableQuantity', { required: true, valueAsNumber: true })}
              id='availableQuantity'
              type='number'
              placeholder='Available Quantity'
            />
            {errors.availableQuantity && <p className='text-red-600'>Available Quantity is required</p>}
          </div>
        </div>

        
          <div className='space-y-1 text-sm'>
            <label htmlFor='image' className='block text-gray-600'>
              Image URL
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              {...register('image', { required: true })}
              id='image'
              type='text'
              placeholder='Image URL'
            />
            {errors.image && <p className='text-red-600'>Image URL is required</p>}
          </div>
        
      </div>

      <div className='mt-6'>
        <button
          type='submit'
          className='w-full px-6 py-3 rounded-md bg-slate-600 text-white'
        >
          {loading ? <TbFidgetSpinner className='m-auto animate-spin' size={24} /> : 'Update Product'}
        </button>
      </div>
    </form>
  );
};

export default UpdateProductForm;
