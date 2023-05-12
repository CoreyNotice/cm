import './index.css';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Contact from './Contact';
import Order from './Order';
import Orders from './Orders';
import { ShoppingCart } from 'phosphor-react';
import { Cart } from './Cart';
import {ShopContextProvider} from './context/ShopContext';
function App() {
  return (
    <ShopContextProvider>
    <Router>
    <header>
      <div className='.nav'>
    <Nav variant="pills" defaultActiveKey="/home">
      <Navbar  variant="dark">
     
      <Navbar.Brand href="#home" className='ml-auto'>
            <img
              alt="logo"
              src="https://photos.zillowstatic.com/h_l/ISvw8hqj79p1ao1000000000.jpg"
              width="30"
              height="30"
              className=" d-inline-block align-top"
            />
               {''}
          </Navbar.Brand>
       
      <Nav.Item className='nav-link'>
        < Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item className='nav-link'>
        <Link to="Order">Order</Link>
      </Nav.Item>
      <Nav.Item className='nav-link'>
        <Link to="Contact">Contact</Link>
      </Nav.Item>
      <Nav.Item className='nav-link'>
        <Link to="Cart"><ShoppingCart size={32} /></Link>
      </Nav.Item>
     
      </Navbar>
    </Nav>
    </div>
    </header>
    
<main>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="Order" element={<Order/>} />
                <Route path="Order/:id" element={<Orders />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Cart" element={<Cart/>} />
               
            </Routes>
        </main>
          
        
        
        </Router>
        </ShopContextProvider>
  )    
}

export default App;
