import React, { useRef, useState } from 'react';
import gilbeys from '../components/assets/gilbeysgin750ml.png';
import ko from '../components/assets/ko750ml.png';
import chrome from '../components/assets/chromegin750ml.png';
import best from '../components/assets/bestgin750ml.png';
import gordonspink from '../components/assets/gordonspink.jpg';
import tanql from '../components/assets/tanqueray1l.jpg';

import 'swiper/swiper-bundle.css';


const cards = [
    { image: gordonspink, name: "Gordon's Pink 750ml", price: 'Ksh 1,700', id: '12' },
    { image: tanql, name: 'Tanqueray 1L', price: 'Ksh 3,000', id: '13' },
    { image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300', id: '3' },
    { image: ko, name: 'KO Gin 750ml', price: 'Ksh 2,500', id: '4' },
    {image: chrome, name: 'Chrome Gin 750ml', price: 'Ksh 800', id: '5'},
    { image: best, name: 'Best Gin 750ml', price: 'Ksh 1,000', id: '6' }
]

function Ginsellers({ handleClick }) {
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
              <img src={card.image} alt={card.name} />
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
   
export default Ginsellers;
