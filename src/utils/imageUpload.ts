export const imageUpload = async (image: File) => {
    const formData = new FormData();
    formData.append('image', image);
  
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Image upload failed');
    }
  
    return await response.json();
  };
  