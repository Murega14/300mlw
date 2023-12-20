import React from 'react'

const cards = []

function Cigarettes() {

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

export default Cigarettes