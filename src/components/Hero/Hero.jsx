import React, { useRef, useState } from 'react';
import './Hero.css';
import gilbeys from '../assets/gilbeysgin750ml.png'
import ko from '../assets/ko750ml.png';
import whitecap from '../assets/whitecap.png';
import tusker from '../assets/tusker.png';
import cmorg from '../assets/captainmorgan.png';
import jameson from '../assets/jameson.png';
import smirnoff from '../assets/sminorff.png';


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


function Hero({ handleClick }) {
  const cardsContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 50;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      cardsContainerRef.current.scrollLeft -= cardWidth;
    } else {
      cardsContainerRef.current.scrollLeft = cardsContainerRef.current.scrollWidth;
      setCurrentIndex(cards.length - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      cardsContainerRef.current.scrollLeft += cardWidth;
    } else {
      cardsContainerRef.current.scrollLeft = 0;
      setCurrentIndex(0);
    }
  };

  return (
    <div className="horizontal-scrolling-cards">
      <button onClick={scrollLeft} className="arrow arrow-left">
        <img src="https://img.icons8.com/ios-filled/50/000000/left-squared.png" alt="Left Arrow" />
      </button>
      <div className="cards-container" ref={cardsContainerRef}>
        {cards &&
          cards.map((card) => (
            <div key={card.id} className="card-item">
              <img src={card.Image} alt={card.name} />
              <p>{card.name}</p>
              <p>{card.price}</p>
              <div className="cardbutton">
                <button onClick={() => handleClick(card)}>Buy</button>
              </div>
            </div>
          ))}
      </div>
      <button onClick={scrollRight} className="arrow arrow-right">
        <img src="https://img.icons8.com/ios-filled/50/000000/right-squared.png" alt="Right Arrow" />
      </button>
    </div>
  );
}

export default Hero;
