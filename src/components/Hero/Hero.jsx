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
  const [activePreview, setActivePreview] = useState(null);

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

  const handleProductClick = (productName) => {
    setActivePreview(productName);
  };

  const handleCloseClick = () => {
    setActivePreview(null);
  };

  return (
    <div className="horizontal-scrolling-cards">
      <div className='products-container'>
        {cards && cards.map((product) => (
          <div
            key={product.id}
            className='product'
            data-name={`p-${product.id}`}
            onClick={() => handleProductClick(`p-${product.id}`)}
          >
            {/* Render product details here */}
            {/* Example: */}
            <img src={product.Image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className='products-preview' style={{ display: activePreview ? 'flex' : 'none' }}>
  {cards && cards.map((product) => (
    <div
      key={product.id}
      className={`preview ${activePreview === `p-${product.id}` ? 'active' : ''}`}
      data-target={`p-${product.id}`}
    >
  
      <i className='fas fa-times' onClick={handleCloseClick}></i>
      <img src={product.Image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className='price'>{product.price}</div>
      <div className='buttons'>
        <a href='#' className='buy'>buy now</a>
        <a href='#' className='cart'>add to cart</a>
      </div>
    </div>
  ))}
</div>
      
    </div>
  );
}

export default Hero;
