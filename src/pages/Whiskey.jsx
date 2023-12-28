import React from 'react'
import '../pages/styles/Whiskey.css'
import jameson from '../components/assets/jameson.png';
import jd from '../components/assets/jd750ml.png';
import redlabel from '../components/assets/redlabel.png';
import blacklabel from '../components/assets/blacklabel.png';
import martell from '../components/assets/martell.png';
import allseasons from '../components/assets/allseasons.png';
import jimbeam from '../components/assets/jimbeam.jpg';
import singleton from '../components/assets/singleton.png';


const products = [   
  { image: jameson, name: 'Jameson 750ml', price: 'Ksh 2,700', id: '1' },
  {image: jd, name: 'Jack Daniels 750ML', price: 'Ksh 3,000', id: '34' },
  { image: martell, name: "Martell 750ml", price: 'Ksh 4,000', id: '12' },
  {image: redlabel, name: 'Red Label 750ML', price: 'Ksh 1,800', id: '35' },
  {image: jimbeam, name: 'Jim Beam 750ML', price: 'Ksh 2,500', id: '32' },
  {image: singleton, name: 'Singleton 12yrs 750ML', price: 'Ksh 4,500', id: '31' },
  {image: blacklabel, name: 'Black Label 750ML', price: 'Ksh 2,800', id: '36' },
  {image: allseasons, name: 'All Seasons 750ML', price: 'Ksh 1,200', id: '37' }
]

function Whiskey() {

  const [activePreview, setActivePreview] = React.useState(null);

  const handleProductClick = (productName) => {
    setActivePreview(productName);
  };

  const handleCloseClick = () => {
    setActivePreview(null);
  };


  return (
    <div className='container'>
      {/* Products */}
      <div className='products-container'>
        {products.map((product) => (
          <div
            key={product.id}
            className='product'
            data-name={`p-${product.id}`}
            onClick={() => handleProductClick(`p-${product.id}`)}
          >
            {/* Render product details here */}
            {/* Example: */}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Preview */}
      <div className='products-preview' style={{ display: activePreview ? 'flex' : 'none' }}>
  {products.map((product) => (
    <div
      key={product.id}
      className={`preview ${activePreview === `p-${product.id}` ? 'active' : ''}`}
      data-target={`p-${product.id}`}
    >
  
      <i className='fas fa-times' onClick={handleCloseClick}></i>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className='price'>{product.price}</div>
      <div className='buttons'>
        <a href='#' className='buy'>buy now</a>
        <a href='#' className='cart'>add to cart</a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Whiskey