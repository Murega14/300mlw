import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import gin from '../components/assets/gin2.png';
import whiskey from '../components/assets/whiskey.png';
import vodka from '../components/assets/vodka.png';
import beer from '../components/assets/bg.png';
import wine from '../components/assets/wine.png';
import rum from '../components/assets/rum.png';
import tequila from '../components/assets/tequila.png';
import mixers from '../components/assets/mixers.png';
import cigs from '../components/assets/cigs.png';

const cards = [
  { Image: gin, name: 'Shop Gin', route: '/gin' },
  { Image: whiskey, name: 'Shop Whiskey', route: '/whiskey' },
  { Image: vodka, name: 'Shop Vodka', route: '/vodka' },
  { Image: beer, name: 'Shop Beer', route: '/beer' },
  { Image: wine, name: 'Shop Wine', route: '/wine' },
  { Image: rum, name: 'Shop Rum', route: '/rum' },
  { Image: tequila, name: 'Shop Tequila', route: '/tequila' },
  { Image: mixers, name: 'Shop Mixers', route: '/mixers' },
  { Image: cigs, name: 'Shop Cigarettes', route: '/cigs' }
];

function Product() {
  return (
    <div className="cube-container">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      {/* Add more cube divs as needed */}
      <div className='product-cards'>
        <div className='prouct-card-container'>
          {cards.map((card, index) => (
            <Link key={index} to={card.route} className='product-card'>
              <img src={card.Image} alt={card.name} />
              <p>{card.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Product;
