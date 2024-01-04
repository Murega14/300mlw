import React, { useRef, useState } from 'react';
import gilbeys from '../components/assets/gilbeysgin750ml.png';
import ko from '../components/assets/ko750ml.png';
import chrome from '../components/assets/chromegin750ml.png';
import best from '../components/assets/bestgin750ml.png';
import gordonspink from '../components/assets/gordonspink.png';
import tanql from '../components/assets/tanqueray1l.png';

import 'swiper/swiper-bundle.css';


const cards = [
    { image: gordonspink, name: "Gordon's Pink 750ml", price: 'Ksh 1,700', id: '12' },
    { image: tanql, name: 'Tanqueray 1L', price: 'Ksh 3,000', id: '13' },
    { image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300', id: '3' },
    { image: ko, name: 'KO Gin 750ml', price: 'Ksh 2,500', id: '4' },
    {image: chrome, name: 'Chrome Gin 750ml', price: 'Ksh 800', id: '5'},
    { image: best, name: 'Best Gin 750ml', price: 'Ksh 1,000', id: '6' }
]

function Ginsellers({ handleClick, handleBuyNow, activeProduct}) {
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
            <img src={product.image} alt={product.name} />
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
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className='price'>{product.price}</div>
      <div className='buttons'>
        <a href='#' className='buy' onClick={() => handleBuyNow(activeProduct)}>buy now</a>
        <a href='#' className='cart'>add to cart</a>
      </div>
    </div>
  ))}
</div>
      
    </div>
  );

}
   
export default Ginsellers;
