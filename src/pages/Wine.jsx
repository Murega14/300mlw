import React from 'react'
import './main.css'

const cards = []

function Wine() {
  return (
    <div className='container'>
      {cards && cards.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.image} alt={card.name} />
          <h2>{card.name}</h2>
          <p>{card.price}</p>
        </div>
        ))}
    </div>
    )

}

export default Wine