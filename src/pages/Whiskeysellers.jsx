import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jameson from '../components/assets/jameson.png';
import jd from '../components/assets/jd750ml.png';
import redlabel from '../components/assets/redlabel.png';
import blacklabel from '../components/assets/blacklabel.png';
import martell from '../components/assets/martell.png';
import allseasons from '../components/assets/allseasons.png';
import jimbeam from '../components/assets/jimbeam.jpg';
import singleton from '../components/assets/singleton.png';
import './styles/Home.css';
import Cart from '../pages/Cart';
import { CartContext } from '../context/cart';

const cards = [
  { image: martell, name: 'Martell 750ml', price: 'Ksh 4,000', id: '12' },
  { image: jameson, name: 'Jameson 750ML', price: 'Ksh 2,500', id: '33' },
  { image: jd, name: 'Jack Daniels 750ML', price: 'Ksh 3,000', id: '34' },
  { image: jimbeam, name: 'Jim Beam 750ML', price: 'Ksh 2,500', id: '32' },
  { image: redlabel, name: 'Red Label 750ML', price: 'Ksh 1,800', id: '35' },
  { image: singleton, name: 'Singleton 12yrs 750ML', price: 'Ksh 4,500', id: '31' },
  { image: blacklabel, name: 'Black Label 750ML', price: 'Ksh 2,800', id: '36' },
  { image: allseasons, name: 'All Seasons 750ML', price: 'Ksh 1,200', id: '37' },
];

function Whiskeysellers({ handleClick }) {
  const [showModal, setShowModal] = React.useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext) || {};

  const notifyAddedToCart = (product) =>
    toast.success(`${product.name} added to cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#fff',
        color: '#000',
      },
    });

  const notifyRemovedFromCart = (product) =>
    toast.error(`${product.name} removed from cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#000',
        color: '#fff',
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="best-seller-content-header flex flex-row justify-center gap-6 px-4 sm:px-8 py-0 md:py-12 rounded-lg overflow-x-auto relative">
      <ToastContainer />
      <div className="cards-container flex w-full overflow-x-auto">
        <div className="product-cards-container flex space-x-4">
          {cards.map((product) => (
            <div
              key={product.id}
              className="whiskey-product-card border border-gray-200 px-6 py-0 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80 h-100"
            >
              <img
                src={product.image}
                alt={`Product: ${product.name}`}
                className="object-cover w-full h-80 rounded-t-lg"
              />
              <div className="px-2 pb-2">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-yellow-300">
                  {product.name}
                </h5>
                <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</span>
              </div>
              <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                {!cartItems || !cartItems.find((item) => item.id === product.id) ? (
                  <button
                    className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      addToCart(product);
                      notifyAddedToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button
                        className="px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                      <p className="text-gray-600">
                        {cartItems.find((item) => item.id === product.id)?.quantity || 0}
                      </p>
                      <button
                        className="px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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
        </div>
      </div>

      <button
        className="scroll-button left absolute top-1/2 transform -translate-y-1/2 left-0 bg-white border border-gray-300 px-2 py-1 rounded-full cursor-pointer"
        onClick={() => {
          const container = document.querySelector('.product-cards-container');
          container.scrollLeft -= 200;
        }}
      >
        &lt;
      </button>
      <button
        className="scroll-button right absolute top-1/2 transform -translate-y-1/2 right-0 bg-white border border-gray-300 px-2 py-1 rounded-full cursor-pointer"
        onClick={() => {
          const container = document.querySelector('.product-cards-container');
          container.scrollLeft += 200;
        }}
      >
        &gt;
      </button>

      <Cart showModal={showModal} toggle={toggle} cartItems={cartItems} />
    </div>
  );
}

export default Whiskeysellers;
