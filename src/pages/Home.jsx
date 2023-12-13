import React from 'react'
import Hero from '../components/Hero/Hero'
import chrome from '../components/assets/chromegin750ml.jpeg'
import best from '../components/assets/bestgin750ml.jpeg'
import gilbeys from '../components/assets/gilbeysgin750ml.jpeg'
import ko from '../components/assets/ko750ml.jpeg'
import whitecap from '../components/assets/whitecap.jpg'
import tusker from '../components/assets/tusker.jpg'
import cmorg from '../components/assets/captainmorgan750ml.jpg'

const Home = () => {
  const cards = [
    { Image: chrome, name: 'Chrome Gin 750ml', price: 'Ksh 700' },
    { Image: best,name: 'Best Gin 750ml', price: 'Ksh 900' },
    { Image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1300' },
    { Image: ko, name: 'Kenyan Originals Gin 750ml', price: 'Ksh 2500' },
    { Image: whitecap, name: 'White Cap Lager 500ml', price: 'Ksh 250' },
    { Image: tusker, name: 'Tusker Lager 500ml', price: 'Ksh 200' },
    { Image: cmorg, name: 'Captain Morgan 750ml', price: 'Ksh 1000' }
    // Add more products if needed
  ];

  return (
    <div>
      <h1>Best Sellers</h1>
      <Hero cards={cards} />
    </div>
  );
};

export default Home