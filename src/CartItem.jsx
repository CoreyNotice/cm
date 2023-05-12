import React from 'react'

export const CartItem=(props)=> {
    const {_id,pic,name, description,price}=props||{}
  return (
    <div className='CartItem'>
    <img src={pic} alt={name}/>
    <div className='description'>
    <p>
       {" "} 
       <b>{name}</b>
    </p>
    <p>
       ${price} 
    </p>
    </div>
    </div>
  )
  }