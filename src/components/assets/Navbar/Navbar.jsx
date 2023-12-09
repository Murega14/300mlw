import React from 'react'
import './Navbar.css'

const Navbar = () => {

    return (
        <div className='navbar'>
             <div className='navbar-logo'>
                <p>300ML</p>
            </div>
            <ul className='nav-menu'>
                <li>Home<hr/></li>
                <li>Shop</li>
                <li>Contact</li>
                </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <div className='nav-cart-count'>0</div>
            </div> 
        </div>
        )
    }

export default Navbar
