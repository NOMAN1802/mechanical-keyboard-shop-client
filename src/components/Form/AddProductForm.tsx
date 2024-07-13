/* eslint-disable no-unused-vars */
import { FormEventHandler } from 'react';
import {  UseFormRegister, FieldErrors} from 'react-hook-form';
import { TbFidgetSpinner } from 'react-icons/tb';
import { FormValues } from '../../types';

interface AddProductFormProps {
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  loading: boolean;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit, register, errors, loading }) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-slate-800 rounded-xl bg-gray-50">
      <form onSubmit={onSubmit} className="space-y-6 w-full max-w-2xl p-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-2">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-slate-600">Title</label>
            <input
              className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
              {...register("title", { required: "Title is required" })}
              id="title"
              type="text"
              placeholder="Title"
            />
            {errors.title && <p className="text-red-600">{errors.title.message}</p>}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="brand" className="block text-slate-600">Brand</label>
            <input
              className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
              {...register("brand", { required: "Brand is required" })}
              id="brand"
              type="text"
              placeholder="Brand"
            />
            {errors.brand && <p className="text-red-600">{errors.brand.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-2">
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">Category</label>
            <input
              className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
              {...register("category", { required: "Category is required" })}
              id="category"
              type="text"
              placeholder="Category"
            />
            {errors.category && <p className="text-red-600">{errors.category.message}</p>}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block text-slate-600">Price</label>
            <input
              className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
              {...register("price", { required: "Price is required", valueAsNumber: true })}
              id="price"
              type="float"
              placeholder="Price"
            />
            {errors.price && <p className="text-red-600">{errors.price.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-2">
          <div className="space-y-1 text-sm">
            <label htmlFor="availableQuantity" className="block text-gray-600">Available Quantity</label>
            <input
              className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
              {...register("availableQuantity", { required: "availableQuantity is required", valueAsNumber: true })}
              id="availableQuantity"
              type="number"
              placeholder="Available Quantity"
            />
            {errors.availableQuantity && <p className="text-red-600">{errors.availableQuantity.message}</p>}
          </div>

          {/* rating */}

          <div className="space-y-1 text-sm">
          <label htmlFor="rating" className="block text-slate-600">Rating</label>
          <input
            className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
            {...register("rating", { required: "Rating is required", valueAsNumber: true, min: 0, max: 5 })}
            id="rating"
            type="float"
            placeholder="Rating (0 to 5)"
          />
          {errors.rating && <p className="text-red-600">{errors.rating.message}</p>}
        </div>
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="image" className="block text-gray-600">Image</label>
          <input
            className="w-full px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500 rounded-md"
            {...register("image", { required: "Image is required" })}
            id="image"
            type="url"
            placeholder="Image URL"
          />
          {errors.image && <p className="text-red-600">{errors.image.message}</p>}
        </div>

       

        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-slate-600">Description</label>
          <textarea
            id="description"
            className="block rounded-md focus-rose-300 w-full h-32 px-4 py-3 text-slate-800 border border-slate-300 focus:outline-slate-500"
            {...register("description", { required: "Description is required" })}
            placeholder="Description"
          ></textarea>
          {errors.description && <p className="text-red-600">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-slate-600"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;