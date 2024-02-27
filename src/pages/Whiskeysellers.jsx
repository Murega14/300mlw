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
import { Carousel, CarouselItem } from '../context/Carousel';

const cards = [
  { image: martell, name: 'Martell 750ml', price: '4000', id: '42' },
  { image: jameson, name: 'Jameson 750ML', price: '2500', id: '33' },
  { image: jd, name: 'Jack Daniels 750ML', price: '3000', id: '34' },
  { image: jimbeam, name: 'Jim Beam 750ML', price: '2500', id: '32' },
  { image: redlabel, name: 'Red Label 750ML', price: '1800', id: '35' },
  { image: singleton, name: 'Singleton 12yrs 750ML', price: '4500', id: '31' },
  { image: blacklabel, name: 'Black Label 750ML', price: '2800', id: '36' },
  { image: allseasons, name: 'All Seasons 750ML', price: '1200', id: '37' },
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
    <>
      <ToastContainer />
      <div className="container border-4 border-red-800 solid flex w-screen overflow-x-hidden gap-6 p-4 m-4"
      style={{borderRadius: '25px'}}>
        <Carousel>
          {cards.map((product) => (
            <CarouselItem key={product.id}>
              <div
                className="whiskey-product-card border-gray-200 px-6 py-0 rounded-lg border-2 shadow dark:border-gray-700 w-60 h-100 sm:w-60 sm:h-100 md:w-60 md:h-100 gap-8 bg-[#BBC3A4] "
                style={{borderRadius: '30px'}}
              >
                <img
                  src={product.image}
                  alt={`Product: ${product.name}`}
                  className="h-60 w-60 dark:border-black-800 object-cover"
                />
                <div className="px-2 pb-2 border-t-2 dark:border-black-800">
                  <h5 className="text-lg font-bold text-black truncate block capitalize">
                    {product.name}
                  </h5>
                  <span className="text-lg font-semibold text-black cursor-auto my-3">
                    Ksh{product.price}
                  </span>
                </div>
                <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                  {!cartItems || !cartItems.find((item) => item.id === product.id) ? (
                    <button
                      className="w-full bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-800 dark:hover:bg-blue-800 text-white dark:focus:ring-blue-800"
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
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {/* Add horizontal scroll buttons */}
      
      <Cart showModal={showModal} toggle={toggle} cartItems={cartItems} />

    </>
  );
}

export default Whiskeysellers;
