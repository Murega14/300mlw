import React from 'react'
import './Home.css'
import Hero from '../components/Hero/Hero'
import gilbeys from '../components/assets/gilbeysgin750ml.jpeg'
import ko from '../components/assets/ko750ml.jpeg'
import whitecap from '../components/assets/whitecap.jpg'
import tusker from '../components/assets/tusker.jpg'
import cmorg from '../components/assets/captainmorgan750ml.jpg'
import jameson from '../components/assets/jameson.jpg'
import smirnoff from '../components/assets/smirnoff.jpg'

const Home = () => {

  const [cart, setCart] = React.useState([]);

  const cards = [
    { Image: jameson, name: 'Jameson 750ml', price: 'Ksh 2,700' },
    { Image: smirnoff, name: 'Smirnoff 750ml', price: 'Ksh 2,500' },
    { Image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300' },
    { Image: ko, name: 'Kenyan Originals Gin 750ml', price: 'Ksh 2,500' },
    { Image: whitecap, name: 'White Cap Lager 500ml', price: 'Ksh 250' },
    { Image: tusker, name: 'Tusker Lager 500ml', price: 'Ksh 200' },
    { Image: cmorg, name: 'Captain Morgan 750ml', price: 'Ksh 1,000' },
    // Add more products if needed
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  }

  return (
    <div className='header'>
      <h1>Best Sellers</h1>
      <Hero cards={cards} addToCart={addToCart} />

      <h3>Contact Us</h3>
    </div>
  );
};

export default Home