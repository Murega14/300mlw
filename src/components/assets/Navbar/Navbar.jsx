import React, {useState} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline'; // Import the shopping cart icon from Heroicons
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // search functionality here
      console.log("Search term:", searchTerm);
    };

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <p>300 ML</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'None'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("product")}}><Link style={{textDecoration: 'None'}} to='/product'>Shop</Link>{menu==="product"?<hr/>:<></>}</li>
      </ul>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">Search</button>
        </form>
      </div>
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
