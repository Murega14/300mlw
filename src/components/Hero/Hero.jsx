import React from 'react';
import './Hero.css';
import gilbeys from '../assets/gilbeysgin750ml.png';
import ko from '../assets/ko750ml.png';
import whitecap from '../assets/whitecap.png';
import tusker from '../assets/tusker.png';
import cmorg from '../assets/captainmorgan.png';
import jameson from '../assets/jameson.png';
import smirnoff from '../assets/sminorff.png';
import Cart from '../../pages/Cart';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cards = [
  { Image: jameson, name: 'Jameson 750ml', price: 'Ksh 2,700', id: '1' },
  { Image: smirnoff, name: 'Smirnoff 750ml', price: 'Ksh 2,500', id: '2' },
  { Image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300', id: '3' },
  { Image: ko, name: 'KO Gin 750ml', price: 'Ksh 2,500', id: '4' },
  { Image: whitecap, name: 'White Cap Lager 500ml', price: 'Ksh 250', id: '5' },
  { Image: tusker, name: 'Tusker Lager 500ml', price: 'Ksh 250', id: '6' },
  { Image: cmorg, name: 'Captain Morgan 750ml', price: 'Ksh 1,000', id: '7' },
  // Add more products if needed
];

function Hero() {

  const [showModal, setShowModal] = React.useState(false);
  const {cartItems, addToCart, removeFromCart} = useContext(CartContext) || {};

  const notifyAddedToCart = (item) => toast.success(`${item.title} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#fff',
      color: '#000',
    }
    });

  const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff',
    }
    });

    const handleRemoveFromCart = (product) => {
      removeFromCart(product);
      notifyRemovedFromCart(product);
    };

  const toggle = () => {
    setShowModal(!showModal);
  };





  return (
    <div className="products-container">
    {cards && cards.map((product) => (
      <div key={product.id} className='product bg-white shadow-md rounded-lg px-10 py-10 mb-4'>
        <img src={product.Image} alt={`Product: ${product.name}`} className='rounded-md h-48' />
        <div className='mt-4'>
          <h1 className='text-lg uppercase font-bold'>{product.name}</h1>
          <p className='mt-2 text-gray-600'>{product.price}</p>
        </div>
        <div className='mt-6 flex justify-between items-center'>
          {!cartItems || !cartItems.find(item => item.id === product.id) ? (
            <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
              onClick={() => {
                addToCart(product);
                notifyAddedToCart(product);
              }}
            >
              Add to cart
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => addToCart(product)}
              >
                +
              </button>
              <p className='text-gray-600'>{cartItems.find(item => item.id === product.id)?.quantity || 0}</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  const cartItem = cartItems.find((item) => item.id === product.id);
                  if (cartItem.quantity === 1) {
                    handleRemoveFromCart(product);
                  } else {
                    removeFromCart(product);
                  }
                }}
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    ))}
    <Cart showModal={showModal} toggle={toggle} cartItems={cartItems} />
  </div>
  
  );
}

export default Hero;
