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

  const [cart, setCart] = useState(null);
  const [activePreview, setActivePreview] = useState(null);

  const handleProductClick = (productName) => {
    setActivePreview(productName);
  };

  const handleCloseClick = () => {
    setActivePreview(null);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
 };

 const handleBuyNow = (product) => {
    handleAddToCart(product);
    alert('Item added to cart');
 };

 const activeProduct = cards.find((product) => `p-${product.id}` === activePreview);


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
      {activeProduct && (
        <div className='products-preview'>
          <div className={`preview ${activePreview ? 'active' : ''}`} data-target={activePreview}>
            <i className='fas fa-times' onClick={handleCloseClick}></i>
            <img src={activeProduct.Image} alt={activeProduct.name} />
            <h3>{activeProduct.name}</h3>
            <div className='price'>{activeProduct.price}</div>
            <div className='buttons'>
              <a href='/cart' className='buy' onClick={() => handleBuyNow(activeProduct)}>buy now</a>
              <a href='/cart' className='cart' onClick={() => handleAddToCart(activeProduct)}>add to cart</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Hero;
