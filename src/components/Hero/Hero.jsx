import React from 'react';
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
  { Image: jameson, name: 'Jameson 750ml', price: '2,700', id: '1' },
  { Image: smirnoff, name: 'Smirnoff 750ml', price: '2,500', id: '2' },
  { Image: gilbeys, name: 'Gilbeys Gin 750ml', price: '1,300', id: '3' },
  { Image: ko, name: 'KO Gin 750ml', price: '2,500', id: '4' },
  { Image: whitecap, name: 'White Cap Lager 500ml', price: '250', id: '5' },
  { Image: tusker, name: 'Tusker Lager 500ml', price: '250', id: '6' },
  { Image: cmorg, name: 'Captain Morgan 750ml', price: '1,000', id: '7' },
  // Add more products if needed
];


function Hero() {
  const [showModal, setShowModal] = React.useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext) || {};
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data, replace with actual data fetching logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

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
    <div className="contents">
      <ToastContainer />
      <div className="best-seller-content-header flex flex-row justify-center gap-6 px-4 sm:px-8 py-0 md:py-12 rounded-lg overflow-x-auto relative">
      <div className="cards-container flex w-full overflow-x-auto">
        {/* Set a container for the product cards */}
        <div className="product-cards-container flex space-x-4 rounded-full">
          {isLoading ? (
            <div className="flex flex-row gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce animation-delay--3s"></div>
              <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce animation-delay--5s"></div>
            </div>
          ) : (
            cards.map((product) => (
              <div
                key={product.id}
                className="best-seller-product-card border-double
                 border-2 rounded-b-lg border-sky-500
                  border-black-800 px-6 py-0
                  bg-white shadow-md rounded-xl duration-500
                  hover:scale-105 hover-shadow-xl
                   w-80 h-100 overflow-y-hidden"
              >
                <img
                  src={product.Image}
                  alt={`Product: ${product.name}`}
                  className="h-80 w-72 border-t-2 dark:border-black-800 object-cover rounded-t-xl"
                />
                <div className="px-2 pb-2 border-t-2 dark:border-black-800">
                  <h5 className="text-lg font-bold text-black truncate block capitalize">
                    {product.name}
                  </h5>
                  <span className="text-lg font-semibold text-black cursor-auto my-3">Ksh{product.price}</span>
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
            ))
          )}
        </div>
      </div>

      {/* Add horizontal scroll buttons */}
      <button
        className="scroll-button left absolute top-1/2 transform -translate-y-1/2 left-0 bg-white border border-gray-300 px-2 py-1 rounded-full cursor-pointer"
        onClick={() => {
          const container = document.querySelector('.product-cards-container');
          container.scrollLeft -= 200; // Adjust the scroll distance as needed
        }}
      >
        &lt;
      </button>
      <button
        className="scroll-button right absolute top-1/2 transform -translate-y-1/2 right-0 bg-white border border-gray-300 px-2 py-1 rounded-full cursor-pointer"
        onClick={() => {
          const container = document.querySelector('.product-cards-container');
          container.scrollLeft += 200; // Adjust the scroll distance as needed
        }}
      >
        &gt;
      </button>

      <Cart showModal={showModal} toggle={toggle} cartItems={cartItems} />
    </div>
    </div>
  );
}

export default Hero;
