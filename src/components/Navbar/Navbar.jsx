import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import applogo from '../assets/applogo.png';
import Cart from '../../pages/Cart';
import { CartContext} from '../../context/cart.jsx';


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const { cartItems} = React.useContext(CartContext) || {};



  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggle = () => {
    setshowModal(!showModal);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={applogo} className="h-8" alt="300Ml Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">300ML</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto bg-gray-900 md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-900">
            <li>
              <a href="/" className="inline py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="/vodka"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Vodka
              </a>
            </li>
            <li>
              <a
                href="/gin"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Gin
              </a>
            </li>
            <li>
              <a
                href="/whiskey"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Whiskey
              </a>
            </li>
            <li>
              <a
                href="/rum"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Rum
              </a>
            </li>
            <li>
            <a
              href="/tequila"
              className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Tequila
            </a>

            </li>
            <li>
              <a
                href="/beer"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Beer
              </a>
            </li>
            <li>
              <a
                href="/wine"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Wine
              </a>
            </li>
            <li>
              <a
                href="/mixers"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Mixers
              </a>
            </li>
            <li>
              <a
                href="/cigarettes"
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Cigarettes
              </a>
            </li>

            <li>
              <Link
                to="/login" // Use Link instead of anchor tag to handle navigation in React
                className="inline py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Login
              </Link>
            </li>
            
          </ul>
          <div className='m-4'>
          {!showModal && <button 
          className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          style={{ float: 'right '}}
          onClick={toggle}
        >Cart ({cartItems.length})</button>}
          </div>
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </div>
    </nav>
  );
};

export default Navbar;
