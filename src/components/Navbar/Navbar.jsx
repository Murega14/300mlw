import React, {useEffect, useState} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline'; // Import the shopping cart icon from Heroicons
import './Navbar.css';
import { Link } from 'react-router-dom';
import applogo from '../assets/applogo.png';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const navbar = document.getElementById('navbar');
      const stickyOffset = navbar.offsetTop;
  
      const handleScroll = () => {
        if (window.pageYOffset >= stickyOffset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <>
    <nav id='navbar' className={isSticky ? 'navbar sticky' : 'navbar'}>
      <div className='navbar-logo'>
        <img src={applogo} alt='alt'/>
        <p>300ML</p>
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
   
  </>   
  );
};

export default Navbar
