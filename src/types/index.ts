

export type TProduct = {
_id: string;
name?:string;
image: string; 
title: string; 
brand: string; 
price: number; 
rating: number;
description: string;
category: string;
availableQuantity: number;
};

export interface Filters {
  category: string;
  minPrice: string;
  maxPrice: string;
}

export type SortOption = 'Price: Low to High' | 'Price: High to Low';

export type QueryParams = {
  name?: string;
  brand?: string; 
};

 export type TOrder = {
    
    productId: string;
    price: number;
    quantity: number;
  };

  export type FormValues = {
    _id: string;
    title: string;
    brand: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    availableQuantity: number;
  };