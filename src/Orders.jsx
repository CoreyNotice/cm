import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom';
import { data } from './data';
import { Card } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { CurrencyDollarSimple } from 'phosphor-react';
import { ShopContext } from './context/ShopContext';
;
export default function Orders(props) {
  const{addToCart,cartItems}=useContext(ShopContext)
  const{id}=useParams();
  const info = data.infos.find((x) => x._id === parseInt(id));
  if (!info){
    return(
      <div>Sorry this cakes is not found</div>
      )
    }
    const cartItemAmount=cartItems[id]
  return (
    <Card>
    <Card.Header>
      <Link to='/Order'>Back to Order Page</Link>
    </Card.Header>
  
    <Card.Body className='row text-center'>
        <Card.Title>
        <Typography aligin='center' variant='h5' >
          {info.name}
        </Typography>
          </Card.Title>
        <Card.Img className='w-50 mx-auto' src={info.pic} alt={info.name} />
        <Card.Text>
        <Typography variant='p'>
        Price:
        <CurrencyDollarSimple size={12} />
         {info.price}
        </Typography>
        <Typography variant='p'>
        <p>{info.description}</p>      
        </Typography>
        </Card.Text>
        <button className='addToCartBttn' onClick={()=>addToCart(info._id)}>
        Add to Cart {cartItemAmount>0&&<>({cartItemAmount})</>}
        </button>
    </Card.Body>
    <div className='row'><footer className='col-md-12 text-center pt-2'> <p>Cmh cakes</p></footer></div>
  </Card>
   
    
  )

}
