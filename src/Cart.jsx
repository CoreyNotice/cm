import React, { useContext } from 'react'
import {data} from './data'
import {ShopContext} from './context/ShopContext'
import { CartItem } from './CartItem'
export function Cart() {
   const {cartItems}=useContext(ShopContext)
   return (
      <div className='cart'>
         <div>
      <h1>Cart Items</h1>
      </div> 
      <div className='cartItems'>
         {data.infos.map((item)=>{
            const{_id,name,pic,price}=item;
            const quantity=cartItems[_id]||0;
            if(quantity>0){
              return(
                <CartItem 
              key={_id}
              name={name}
              pic={pic}
              price={price}
              quantity={quantity}
              />
              );
            }
         return null
         }
      )}
      </div>
      </div>

  )
}

