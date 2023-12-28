import React, { useRef, useState } from 'react';
import jameson from '../components/assets/jameson.png';
import jd from '../components/assets/jd750ml.png';
import redlabel from '../components/assets/redlabel.png';
import blacklabel from '../components/assets/blacklabel.png';
import martell from '../components/assets/martell.png';
import allseasons from '../components/assets/allseasons.png';
import jimbeam from '../components/assets/jimbeam.jpg'
import singleton from '../components/assets/singleton.png'


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
      <div className='stars'>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star-half-alt'></i>
        <span>( 250 )</span>
      </div>
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

export default Whiskeysellers;
