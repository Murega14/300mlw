import React, { useEffect } from 'react';
import './styles/Home.css';
import Hero from '../components/Hero/Hero';
import Ginsellers from '../pages/Ginsellers';
import Whiskeysellers from '../pages/Whiskeysellers';
import Product from '../pages/Product';
import { CartProvider } from '../context/cart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../components/assets/bg.png';

const Home = ({ cards, handleChange, handleClick, notifyAddedToCart, addToCart, handleQuantityChange, cartItems }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <CartProvider>
      <div className="home min-h-screen overflow-hidden w-full">

        <div className="landing bg-gray-800 text-white flex items-center justify-center min-h-screen w-full position-relative">
          <div className="text-box text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" data-aos="zoom-out">Mapema ndo Best!!</h1>
            <p className="text-lg md:text-xl mb-6">
              Get Affordable drinks and have them delivered straight to your doorstep. Chaser pia ziko.
            </p>
            <img src={logo} alt="alt" className="mb-8" />
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>

        <div className="content bg-gray-100 p-8">
          <div data-aos="zoom-in">
            <header className="content-header mb-8" data-aos="zoom-out">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-blue-700">Best Sellers</span>
              </h3>
              <Hero addToCart={addToCart} notifyAddedToCart={notifyAddedToCart} handleQuantityChange={handleQuantityChange} cartItems={cartItems} />
            </header>

            <header className="content-header mb-4" data-aos="zoom-out">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-blue-700">Gin Best Sellers</span>
              </h3>
              <Ginsellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
            </header>

            <header className="content-header mb-4" data-aos="zoom-out">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-blue-700">Whiskey Best Sellers</span>
              </h3>
              <Whiskeysellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
            </header>
          </div>

          <div className="shop-products p-8">
            <Product cards={cards} handleClick={handleClick} handleChange={handleChange} />
          </div>
        </div>

      </div>
    </CartProvider>
  );
};

export default Home;
