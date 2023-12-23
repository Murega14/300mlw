import React, { useState } from 'react';
import './Home.css';
import Hero from '../components/Hero/Hero';
import gilbeys from '../components/assets/gilbeysgin750ml.png';
import ko from '../components/assets/ko750ml.png';
import whitecap from '../components/assets/whitecap.png';
import tusker from '../components/assets/tusker.png';
import cmorg from '../components/assets/captainmorgan.png';
import jameson from '../components/assets/jameson.png';
import smirnoff from '../components/assets/smirnoff.jpg';
import Ginsellers from './Ginsellers';
import Whiskeysellers from './Whiskeysellers';

const Home = () => {
  const [cart, setCart] = useState([]);

  const cards = [
    { Image: jameson, name: 'Jameson 750ml', price: 'Ksh 2,700', id: '1' },
    { Image: smirnoff, name: 'Smirnoff 750ml', price: 'Ksh 2,500', id: '2' },
    { Image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300', id: '3' },
    { Image: ko, name: 'KO Gin 750ml', price: 'Ksh 2,500', id: '4' },
    { Image: whitecap, name: 'White Cap Lager 500ml', price: 'Ksh 250', id: '5' },
    { Image: tusker, name: 'Tusker Lager 500ml', price: 'Ksh 250', id: '6' },
    { Image: cmorg, name: 'Captain Morgan 750ml', price: 'Ksh 1,000', id: '7' },
    // Add more products if needed
  ];

  const handleClick = (card) => {
    if (cart.findIndex((cartItem) => cartItem.id === card.id) === -1) {
      setCart([...cart, { ...card, amount: 1 }]);
    }
  };

  const handleChange = (card, d) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === card.id ? { ...cartItem, amount: cartItem.amount + d } : cartItem
    );
    setCart(updatedCart.filter((cartItem) => cartItem.amount > 0));
  };

  return (
    <div className='home'>
      <div className="cube-container">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className='header'>
        <h1>Best Sellers</h1>
        <Hero cards={cards} handleClick={handleClick} handleChange={handleChange} />
        <h2>Gin Best Sellers</h2>
        <Ginsellers handleClick={handleClick} handleChange={handleChange} />
        <h3>Whiskey Best Sellers</h3>
        <Whiskeysellers handleClick={handleClick} handleChange={handleChange} />
    </div>
    </div>
    </div>
    
  );
};

export default Home;
