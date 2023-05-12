import React from 'react'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import {data} from './data'
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

export default function Order() {
  return (
    <div>
        <main>
           <div className='row'><div className='col1'>
           <div className="container">
            {data.infos.map(info=>
           <CardGroup>
           <Card key={info._id} className='m-0'>
            <Card.Body>
                <Card.Title className='text-center'>{info.name}</Card.Title>
            <a href= {`Order/${info._id}`}><Card.Img className='card w-25  mx-auto' src={info.pic} alt={info.name} /></a>
           </Card.Body>
      
          </Card>
          </CardGroup>
            )}
           </div>
           </div></div>
        </main>
        <div className='row'><footer className='col-md-12 text-center pt-2'> <p>Cmh cakes</p></footer></div>

    </div>
  )
}
