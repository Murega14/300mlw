import React, {useState} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline'; // Import the shopping cart icon from Heroicons
import './Navbar.css';
import { Link } from 'react-router-dom';
import applogo from '../applogo.png';
import logo from '../bg.png'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={applogo} alt='alt'/>
        <p>300 ML</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("home") }}>
          <Link style={{ textDecoration: 'None' }} to='/'>Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("product") }}>
          <Link style={{ textDecoration: 'None' }} to='/product'>Shop</Link>
          {menu === "product" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link style={{ textDecoration: 'None' }} to='/login'><button>Login</button></Link>
        <div className='cart-icon'>
          <Link style={{ textDecoration: 'None' }} to='/cart'>
            <ShoppingCartIcon className='shopping-cart-icon' />
          </Link>
        </div>
      </div>
    </nav>
    <div className='text-box'>
      <h1>Mapema ndo Best!!</h1>
      <p>
        Get Affordable drinks and have them delivered straight to your doorstep. Chaser pia ziko.
      </p>
      <img src={logo} alt='alt'/>
      <a href='/product'>Shop Now</a>
    </div>
  </>   
  );
};

export default Navbar
