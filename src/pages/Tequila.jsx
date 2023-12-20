import React from 'react'
import './main.css'

const cards = []

function Tequila() {
  return (
    <div className='container'>
      {cards && cards.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.image} alt={card.name} />
          <h3>{card.title}</h3>
          <p>{card.price}</p>
          <div className='card-button'>
            <button>Buy</button>
          </div>
        </div>
        ))}
    </div>
  )
}

export default Tequila