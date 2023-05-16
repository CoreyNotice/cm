import React, { createContext, useEffect, useState } from 'react'
import { data } from '../data';
export const ShopContext=createContext();
const getDefaultcart =()=>{
      let cart={}
      for (let i=1;i<data.length;i++){
          cart[data[i]._id]=0;       
      }
      return cart
};
export const ShopContextProvider=(props)=> {
  const[cartItems,setCartItems]=useState([]);
  useEffect(() => {
    const items = localStorage.getItem('cartItems')
    if (items) {
      setCartItems(JSON.parse(items))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  const addToCart = (itemId) => {
    const index = cartItems.findIndex((i) => i._id === itemId._id)
    if (index >= 0) {
      const newCartItems = [...cartItems]
      newCartItems[index].quantity += 1
      setCartItems(newCartItems)
    } else {
      setCartItems([...cartItems, { ...itemId, quantity: 1 }])
    }
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
