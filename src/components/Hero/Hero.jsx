import React, { useRef, useState } from 'react';
import './Hero.css';

function Hero({ cards, addToCart }) {
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

  const handleAddToCart = (product) => {
    // Pass the clicked card object to the `addToCart` prop
    addToCart({ ...product }); // Spread the card object for shallow copy
  };

  return (
    <div className="horizontal-scrolling-cards">
      <button onClick={scrollLeft} className="arrow arrow-left">
        <img src="https://img.icons8.com/ios-filled/50/000000/left-squared.png" alt="Left Arrow" />
      </button>
      <div className="cards-container" ref={cardsContainerRef}>
        {cards &&
          cards.map((card, index) => (
            <div key={index} className="card-item">
              <img src={card.Image} alt={card.content} />
              <p>{card.name}</p>
              <p>{card.price}</p>
              <div className="card-button">
                <button onClick={() => handleAddToCart(card)}>Buy</button>
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
