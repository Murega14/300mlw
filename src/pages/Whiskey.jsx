import React from 'react'
import './main.css'
import jameson from '../components/assets/jameson.jpg';
import jd from '../components/assets/jd750ml.jpg';
import redlabel from '../components/assets/redlabel.jpg';
import blacklabel from '../components/assets/blacklabel.jpg';
import martell from '../components/assets/martell.jpg';
import allseasons from '../components/assets/allseasons.jpg'



const cards = [   
  { image: jameson, name: 'Jameson 750ml', price: 'Ksh 2,700', id: '1' },
  {image: jd, name: 'Jack Daniels 750ML', price: 'Ksh 3,000', id: '34' },
  { image: martell, name: "Martell 750ml", price: 'Ksh 4,000', id: '12' },
  {image: redlabel, name: 'Red Label 750ML', price: 'Ksh 1,800', id: '35' },
  {image: blacklabel, name: 'Black Label 750ML', price: 'Ksh 2,800', id: '36' },
  {image: allseasons, name: 'All Seasons 750ML', price: 'Ksh 1,200', id: '37' }
]

function Whiskey() {
  return (
    <div className='container'>
      {cards && cards.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.image} alt={card.name} />
          <h3>{card.name}</h3>
          <p>{card.price}</p>
        <div className='card-button'>
          <button>Buy</button>
        </div>
        </div>
        ))}
    </div>
  )

}

export default Whiskey