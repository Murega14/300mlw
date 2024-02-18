import React from "react";
import gilbeys from "../assets/gilbeysgin750ml.png";
import ko from "../assets/ko750ml.png";
import whitecap from "../assets/whitecap.png";
import tusker from "../assets/tusker.png";
import cmorg from "../assets/captainmorgan.png";
import jameson from "../assets/jameson.png";
import smirnoff from "../assets/sminorff.png";
import Cart from "../../pages/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const cards = [
  { Image: jameson, name: "Jameson 750ml", price: "2700", id: "1" },
  { Image: smirnoff, name: "Smirnoff 750ml", price: "2500", id: "2" },
  { Image: gilbeys, name: "Gilbeys Gin 750ml", price: "1300", id: "3" },
  { Image: ko, name: "KO Gin 750ml", price: "2500", id: "4" },
  { Image: whitecap, name: "White Cap Lager 500ml", price: "250", id: "5" },
  { Image: tusker, name: "Tusker Lager 500ml", price: "250", id: "6" },
  { Image: cmorg, name: "Captain Morgan 750ml", price: "1000", id: "7" },
  // Add more products if needed
];

function Hero() {
  const [showModal, setShowModal] = React.useState(false);
  const { cartItems, addToCart, removeFromCart } =
    useContext(CartContext) || {};


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };

  
  const notifyAddedToCart = (product) =>
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  const notifyRemovedFromCart = (product) =>
    toast.error(`${product.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
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
        <div
            className="cards-container flex w-full overflow-x-hidden relative"
            style={{ borderRadius: "30px" }}
          >
            <div
              className="card flex space-x-4 m-0"
              style={{ borderRadius: "30px" }}
            >
              {cards.map((product) => (
                  <div
                    key={product.id}
                    data-carousel-item
                    className="best-seller-product-card bg-[#BBC3A4] transition-all border-white px-6 py-0 box-content shadow m-4 w-60 h-100"
                    style={{
                      borderRadius: "25px",
                    }}
                  >
                    <img
                      src={product.Image}
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
                      {!cartItems ||
                      !cartItems.find((item) => item.id === product.id) ? (
                        <button
                          className="w-full bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
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
                              {cartItems.find((item) => item.id === product.id)
                                ?.quantity || 0}
                            </p>
                            <button
                              className="px-2 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                              onClick={() => {
                                const cartItem = cartItems.find(
                                  (item) => item.id === product.id
                                );
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
              }
              
            </div>

            {/* Add horizontal scroll buttons */}


            <Cart showModal={showModal} toggle={toggle} cartItems={cartItems} />
          </div>
      
      
      
    </>
  );
}

export default Hero;
