import React from 'react'
import './main.css'
import jameson from '../components/assets/jameson.jpg';


const cards = [    { image: jameson, name: 'Jameson 750ml', price: 'Ksh 2,700', id: '1' },
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