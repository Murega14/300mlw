import React from 'react';
import gilbeys from '../components/assets/gilbeysgin750ml.jpeg';
import ko from '../components/assets/ko750ml.jpeg';


const cards = [
  { image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300', id: '3' },
  { image: ko, name: 'Kenyan Originals Gin 750ml', price: 'Ksh 2,500', id: '4' },


];

function Gin() {
  return (
    <div className='container'>
        {cards && cards.map((card) => (
            <div key={card.id} className="card">
                <img src={card.image} alt={card.name} />
                <h3>{card.name}</h3>
                <p>{card.price}</p>
              <div className="card-button">
                <button>Buy</button>
              </div>
            </div>
            ))};
    </div>
  )
};

export default Gin;