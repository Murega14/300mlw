import React, { useEffect } from 'react';
import './styles/Home.css';
import Hero from '../components/Hero/Hero';
import Ginsellers from '../pages/Ginsellers';
import Whiskeysellers from '../pages/Whiskeysellers';
import Product from '../pages/Product';
import { CartProvider } from '../context/cart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../components/assets/logo.jpg';
import { Link } from 'react-router-dom';
import Cart from '../pages/Cart';

const Home = ({ cards, handleChange, handleClick, notifyAddedToCart, addToCart, handleQuantityChange, cartItems }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="home min-h-screen overflow-hidden w-full box-sizing-border-box">
    {/* Landing Section */}
    <div className="landing bg-black-100 text-white flex items-center justify-center min-h-screen w-full relative mb-0" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-box w-full text-center dark-bg-yellow-100">
        <h1 className="text-4xl md:text-6xl lg:text-10xl font-bold mb-4 pb-4 pt-6" data-aos="zoom-out">Mapema ndo Best!!</h1>
        <p className="text-lg md:text-xl mb-4">
          <span className='text-black-800 dark:text-black-800'>Get Affordable drinks</span> and have them delivered straight to your doorstep. Chaser pia ziko.
        </p>
        <Link to="/shop" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Link>
      </div>
    </div>

    {/* Content Section */}
    <div data-aos="zoom-out">
      {/* Best Sellers Section */}
      <header className="best-seller-content-header mb-0" data-aos="zoom-out">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          <span className="best-seller-content-header text-black-800 text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Best Sellers</span>
        </h3>
        <Hero addToCart={addToCart} notifyAddedToCart={notifyAddedToCart} handleQuantityChange={handleQuantityChange} cartItems={cartItems} />
      </header>

      {/* Gin Best Sellers Section */}
      <header className="gin-content-header" data-aos="zoom-out">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-blue-700">Gin Best Sellers</span>
        </h3>
        <Ginsellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
        <Link to="/gin" className="shop-link bg-blue-700 text-white font-bold py-2 px-4 rounded mt-0 mb-10 inline-block">
          Shop Gin
        </Link>
      </header>

      {/* Whiskey Best Sellers Section */}
      <header className="whiskey-content-header mb-0" data-aos="zoom-out">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-blue-700">Whiskey Best Sellers</span>
        </h3>
        <Whiskeysellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
        <Link to="/whiskey" className="shop-link bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
          Shop Whiskey
        </Link>
      </header>
    </div>

    {/* Shop Products Section */}
    <div className="shop-products p-8 w-full bg-#FFF600">
      {/* Include your Product component here */}
    </div>

    <CartProvider>
      <Cart />
    </CartProvider>
  </div>

  );
};

export default Home;
