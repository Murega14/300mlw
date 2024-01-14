import React, { useRef, useState } from 'react';
import gilbeys from '../components/assets/gilbeysgin750ml.png';
import ko from '../components/assets/ko750ml.png';
import chrome from '../components/assets/chromegin750ml.png';
import best from '../components/assets/bestgin750ml.png';
import gordonspink from '../components/assets/gordonspink.png';
import tanql from '../components/assets/tanqueray1l.png';
import Cart from '../pages/Cart';
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import 'swiper/swiper-bundle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cards = [
    { image: gordonspink, name: "Gordon's Pink 750ml", price: 'Ksh 1,700', id: '12' },
    { image: tanql, name: 'Tanqueray 1L', price: 'Ksh 3,000', id: '13' },
    { image: gilbeys, name: 'Gilbeys Gin 750ml', price: 'Ksh 1,300', id: '3' },
    { image: ko, name: 'KO Gin 750ml', price: 'Ksh 2,500', id: '4' },
    {image: chrome, name: 'Chrome Gin 750ml', price: 'Ksh 800', id: '5'},
    { image: best, name: 'Best Gin 750ml', price: 'Ksh 1,000', id: '6' }
]

function Ginsellers({ handleClick, handleBuyNow, activeProduct}) {
  
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
    <div className="flex flex-row justify-center gap-8 px-4 sm:px-8 py-4 bg-gray-100 rounded-lg dark:bg-gray-900 overflow-x-auto">
    {cards && cards.map((product) => (
      <div key={product.id} className="product w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <img src={product.image} alt={`Product: ${product.name}`} className="object-cover w-full h-64 rounded-t-lg" />
         <div className="p-6">
           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-yellow">{product.name}</h5>
           <p className="mt-2 text-gray-600">Ksh{product.price}</p>
         </div>
         <div className="p-6 border-t border-gray-200 dark:border-gray-700">
           {!cartItems || !cartItems.find(item => item.id === product.id) ? (
             <button className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               onClick={() => {
                 addToCart(product);
                 notifyAddedToCart(product);
               }}
             >
               Add to cart
             </button>
           ) : (
             <div className="flex items-center justify-between">
               <div className="flex gap-4">
                 <button
                   className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                   onClick={() => addToCart(product)}
                 >
                   +
                 </button>
                 <p className="text-gray-600">{cartItems.find(item => item.id === product.id)?.quantity || 0}</p>
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
             </div>
           )}
         </div>
       </div>
     ))}
    <Cart showModal={showModal} toggle={toggle} cartItems={cartItems} />
   </div>
  
  );

}
   
export default Ginsellers;
