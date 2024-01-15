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

const Home = ({ cards, handleChange, handleClick, notifyAddedToCart, addToCart, handleQuantityChange, cartItems }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <CartProvider>
      <div className="home min-h-screen overflow-hidden w-full box-sizing-border-box">

        {/* Landing Section */}
        <div className="landing bg-black-100 text-white flex items-center justify-center min-h-screen w-full relative mb-0" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="text-box w-full text-center dark-bg-yellow-100">
          <h1 className="text-4xl md:text-6xl lg:text-10xl font-bold mb-4 pb-4 pt-6" data-aos="zoom-out">Mapema ndo Best!!</h1>
          <p className="text-lg md:text-xl mb-4">
            Get Affordable drinks and have them delivered straight to your doorstep. Chaser pia ziko.
          </p>
          {/* Remove the img tag as background image is set */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
          </div>
        </div>


        {/* Content Section */}

      <div data-aos="zoom-in">
        {/* Best Sellers Section */}
        <header className="best-seller-content-header mb-0 bg-black-800" data-aos="zoom-out">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 ">
          <span className="best-seller-content-header text-black-900 !bg-black-100">Best Sellers</span>
          </h3>
          <Hero addToCart={addToCart} notifyAddedToCart={notifyAddedToCart} handleQuantityChange={handleQuantityChange} cartItems={cartItems} />
        </header>

        {/* Gin Best Sellers Section */}
        <header className="gin-content-header bg-maroon-100" data-aos="zoom-out">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-blue-700">Gin Best Sellers</span>
          </h3>
          <Ginsellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
        </header>

          {/* Whiskey Best Sellers Section */}
        <header className="whiskey-content-header mb-0" data-aos="zoom-out">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-blue-700">Whiskey Best Sellers</span>
          </h3>
          <Whiskeysellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
        </header>
      </div>

        {/* Shop Products Section */}
      <div className="shop-products p-8 w-full bg-#FFF600">
        <Product cards={cards} handleClick={handleClick} handleChange={handleChange} />
      </div>
    </div>

    
    </CartProvider>
  );
};

export default Home;
