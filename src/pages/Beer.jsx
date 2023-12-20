import React from 'react'
import './main.css'

const cards = []

function Beer() {
  return (
    <div className='container'>
      {cards && cards.map((card) => (
        <div key={card.id} className='card'>
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