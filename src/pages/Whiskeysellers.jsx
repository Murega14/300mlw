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

  
  return (
    <div className="horizontal-scrolling-cards">
    <div className='products-container'>
      {cards && cards.map((product) => (
        <div
          key={product.id} className='product'>
          {/* Render product details here */}
          {/* Example: */}
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className='add-to-cart-button'>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="https://www.svgrepo.com/show/76388/add-to-cart.svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Add to Cart</span>
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Whiskeysellers;
