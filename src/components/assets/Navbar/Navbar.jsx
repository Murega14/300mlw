import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline'; // Import the shopping cart icon from Heroicons
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <p>300 ML</p>
      </div>
      <ul className='nav-menu'>
        <li>Home<hr /></li>
        <li>Wine</li>
        <li>Gin</li>
        <li>Whiskey</li>
        <li>Vodka</li>
        <li>Beer</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
            <div className='cart-icon'>
                <ShoppingCartIcon className='shopping-cart-icon' />
            </div>
           
      </div>
    </div>
  );
};

export default Navbar
