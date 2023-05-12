import React, { createContext, useState } from 'react'
import { data } from '../data';
export const ShopContext=createContext(null);
const getDefaultcart =()=>{
      let cart={}
      for (let i=1;i<data.length;i++){
          cart[data[i]._id]=0;       
      }
      return cart
};
export const ShopContextProvider=(props)=> {
  const[cartItems,setCartItems]=useState(getDefaultcart());
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const currentCount = prev[itemId] !== undefined ? prev[itemId] : 0;
      return { ...prev, [itemId]: currentCount + 1 };
    });
  };
  
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const contextValue={addToCart,cartItems,removeFromCart}
  console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
};
