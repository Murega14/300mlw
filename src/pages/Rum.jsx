import React from 'react'
import './main.css'

const cards = []

function Rum() {
  return (
    <div className='container'>
      {cards && cards.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.img} alt={card.name} />
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

export default Rum