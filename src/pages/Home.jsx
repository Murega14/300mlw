import React, { useState } from 'react';
import './styles/Home.css';
import Hero from '../components/Hero/Hero'
import Ginsellers from '../pages/Ginsellers';
import Whiskeysellers from '../pages/Whiskeysellers';
import Product from '../pages/Product'
import {CartProvider} from '../context/cart'

import logo from '../components/assets/bg.png'

const Home = ({cards, handleChange, handleClick, notifyAddedToCart, addToCart, handleQuantityChange, cartItems}) => {

  

 return (
    <CartProvider>
      <div className='home'>

<div className='landing'>
  <div className='text-box'>
    <h1>Mapema ndo Best!!</h1>
    <p>
      Get Affordable drinks and have them delivered straight to your doorstep. Chaser pia ziko.
    </p>
    <img src={logo} alt='alt'/>
    <div className="text-box-text">
      <button>Shop Now</button>
    </div>
  </div>
</div>
<div className='content'>
<header className='content-header'>
  <h3 className="App-title">
      {/* Add the animation here */}
    <span className="animated-title">Best Sellers</span>
  </h3>
  <Hero addToCart={addToCart} notifyAddedToCart={notifyAddedToCart} handleQuantityChange={handleQuantityChange} cartItems={cartItems} />
</header>
<div className='gin-sellers'>
  <header className='content-header'>
    <h3 className="App-title">
      {/* Add the animation here */}
      <span className="animated-title">Gin Best Sellers</span>
    </h3>
    <Ginsellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
  </header> 
</div>
<div className='whiskey-sellers'>
  <header className='content-header'>
    <h3 className="App-title">
      {/* Add the animation here */}
      <span className="animated-title">Whiskey Best Sellers</span>
    </h3>
    <Whiskeysellers cards={cards} handleClick={handleClick} handleChange={handleChange} />
  </header> 
</div>
  
</div>
<div className='shop-products'>
<Product cards={cards} handleClick={handleClick} handleChange={handleChange} />
</div>
</div>
    </CartProvider>
      
  
 );
};

export default Home;