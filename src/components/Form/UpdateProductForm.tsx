import { TbFidgetSpinner } from "react-icons/tb";

const UpdateProductForm = ({
    handleSubmit,
   loading,
  productData,
  setProductData,
}) => {
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-10'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='title' className='block text-gray-600'>
                  Title
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='title'
                  value={productData?.title}
                  onChange={event =>
                    setProductData({ ...productData, title: event.target.value })
                  }
                  id='title'
                  type='text'
                  placeholder='Location'
                  required
                />
              </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='brand' className='block text-gray-600'>
                Brand
                </label>
                <input
                  value={productData?.brand}
                  onChange={event =>
                    setProductData({ ...productData, brand: event.target.value })
                  }
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='brand'
                  id='brand'
                  type='text'
                  placeholder='Brand'
                  required
                />
              </div>
    
              <div className='grid grid-cols-2 justify-between gap-2'>
    

    
    
                {/* type */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='category' className='block text-gray-600'>
                    Category
                  </label>
                  <select
                    required
                    className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                    name='type'
                    value={productData?.category} 
                    onChange={(event) =>
                        setProductData({ ...productData, category: event.target.value })
                    }
                  >
                    <option value='Regular'>regular</option>
                    <option value='Featured'>featured</option>
                  </select>
                </div>
    
              </div>
              <div className='flex justify-between gap-2'>
                <div className='space-y-1 text-sm'>
                  <label htmlFor='price' className='block text-gray-600'>
                    Price
                  </label>
                  <input
                    value={productData?.price}
                    onChange={event =>
                        setProductData({ ...productData, price: parseInt(event.target.value, 10) || 0, })
                    }
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='price'
                    id='price'
                    type='number'
                    placeholder='Price'
                    required
                  />
                </div>
    
    
                <div className='space-y-1 text-sm'>
                  <label htmlFor='availableQuantity' className='block text-gray-600'>
                  Available Quantity
                  </label>
                  <input
                    value={productData?.availableQuantity}
                    onChange={event =>
                        setProductData({ ...productData, availableQuantity: event.target.value })
                    }
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='availableQuantity'
                    id='availableQuantityt'
                    type='number'
                    placeholder='Available Quantity'
                    required
                  />
                </div>
              </div>
    
              <div className='flex justify-between gap-2'>
                <div className='space-y-1 text-sm'>
                  <label htmlFor='rating' className='block text-gray-600'>
                  Rating
                  </label>
                  <input
                    value={productData?.rating}
                    onChange={event =>
                        setProductData({ ...productData, rating: parseInt(event.target.value, 10) || 0,  })
                    }
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='rating'
                    id='rating'
                    type='number'
                    placeholder='Rating'
                    required
                  />
                </div>
    
                <div className='space-y-1 text-sm'>
                  <label htmlFor='image' className='block text-gray-600'>
                    Image
                  </label>
                  <input
                    value={productData?.image}
                    onChange={event =>
                        setProductData({ ...productData, image: event.target.value })
                    }
                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='image'
                    id='image'
                    type='url'
                    placeholder='Image'
                    required
                  />
                </div>
              </div>
    
              <div className='space-y-1 text-sm'>
                <label htmlFor='description' className='block text-gray-600'>
                  Description
                </label>
    
                <textarea
                  value={productData?.description}
                  onChange={event =>
                    setProductData({ ...productData, description: event.target.value })
                  }
                  id='description'
                  className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                  name='description'
                ></textarea>
              </div>
            </div>
    
            <button
              type='submit'
              className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
            >
              {loading ? (
                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
              ) : (
                'Update'
              )}
            </button>
          </form>
        </div>
      )
};

export default UpdateProductForm;