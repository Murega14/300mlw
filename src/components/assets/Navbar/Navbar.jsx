import React, {useState} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline'; // Import the shopping cart icon from Heroicons
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <p>300 ML</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'None'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("wine")}}><Link style={{textDecoration: 'None'}} to='/wine'>Wine</Link>{menu==="wine"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("gin")}><Link style={{textDecoration: 'None'}} to='/gin'>Gin</Link>{menu==="gin"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("whiskey")}}><Link style={{textDecoration: 'None'}} to='/whiskey'>Whiskey</Link>{menu==="whiskey"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("vodka")}}><Link style={{textDecoration: 'None'}} to='/vodka'>Vodka</Link>{menu==="vodka"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("beer")}}><Link style={{textDecoration: 'None'}} to='/beer'>Beer</Link>{menu==="beer"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("product")}}><Link style={{textDecoration: 'None'}} to='/product'>Shop</Link>{menu==="product"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link style={{textDecoration: 'None'}} to='/login'><button>Login</button></Link>
            <div className='cart-icon'>
                <Link style={{textDecoration: 'None'}} to='/cart'><ShoppingCartIcon className='shopping-cart-icon' /></Link>
            </div>
           
      </div>
    </div>
  );
};

export default Navbar
