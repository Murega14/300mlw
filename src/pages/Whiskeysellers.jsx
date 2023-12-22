import React, { useRef, useState } from 'react';
import jameson from '../components/assets/jameson.jpg';
import jd from '../components/assets/jd750ml.jpg';
import redlabel from '../components/assets/redlabel.jpg';
import blacklabel from '../components/assets/blacklabel.jpg';
import martell from '../components/assets/martell.jpg';
import allseasons from '../components/assets/allseasons.jpg';
import jimbeam from '../components/assets/jimbeam.jpg'
import singleton from '../components/assets/singleton.jpg'


const cards = [
    { image: martell, name: 'Martell 750ml', price: 'Ksh 4,000', id: '12' },
    {image: jameson, name: 'Jameson 750ML', price: 'Ksh 2,500', id: '33' },
    {image: jd, name: 'Jack Daniels 750ML', price: 'Ksh 3,000', id: '34' },
    {image: jimbeam, name: 'Jim Beam 750ML', price: 'Ksh 2,500', id: '32' },
    {image: redlabel, name: 'Red Label 750ML', price: 'Ksh 1,800', id: '35' },
    {image: singleton, name: 'Singleton 12yrs 750ML', price: 'Ksh 4,500', id: '31' },
    {image: blacklabel, name: 'Black Label 750ML', price: 'Ksh 2,800', id: '36' },
    {image: allseasons, name: 'All Seasons 750ML', price: 'Ksh 1,200', id: '37' },
    
]

function Whiskeysellers({ handleClick }) {
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

export default Whiskeysellers;
