import React from 'react'
import './main.css'
import whitecap from '../components/assets/whitecap.png'
import tusker from '../components/assets/tusker.png'

const cards = [
    { image: whitecap, name: 'White Cap Lager 500ml', price: 'Ksh 250', id: '5' },
    { image: tusker, name: 'Tusker Lager 500ml', price: 'Ksh 250', id: '6' },
]

function Beer() {
  return (
    <div className='container'>
      {cards && cards.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.image} alt={card.name} />
          <h2>{card.name}</h2>
          <p>{card.price}</p>
        <div className='card-button'>
          <button>Buy</button>
        </div>
        </div>
        ))}
    </div>
    )
}

export default Beer