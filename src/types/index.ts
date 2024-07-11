

export type TProduct = {
_id: string;
image: string; 
title: string; 
brand: string; 
price: number; 
rating: number;
description: string;
category: string;
availableQuantity: number;
};

export type QueryParams = {
  name?: string;
  brand?: string; 
};

 export type TOrder = {
    
    productId: string;
    price: number;
    quantity: number;
  };