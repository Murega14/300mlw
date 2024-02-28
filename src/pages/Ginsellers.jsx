import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gilbeys from "../components/assets/gilbeysgin750ml.png";
import ko from "../components/assets/ko750ml.png";
import chrome from "../components/assets/chromegin750ml.png";
import best from "../components/assets/bestgin750ml.png";
import gordonspink from "../components/assets/gordonspink.png";
import tanql from "../components/assets/tanqueray1l.png";
import Cart from "../pages/Cart";
import { CartContext } from "../context/cart";
import "./styles/Home.css";
import { Carousel, CarouselItem } from '../context/Carousel';

const cards = [
  {
    image: gordonspink,
    name: "Gordon's Pink 750ml",
    price: "1700",
    id: "12",
  },
  { image: tanql, name: "Tanqueray 1L", price: "3000", id: "13" },
  { image: gilbeys, name: "Gilbeys Gin 750ml", price: "1300", id: "3" },
  { image: ko, name: "KO Gin 750ml", price: "2500", id: "4" },
  { image: chrome, name: "Chrome Gin 750ml", price: "800", id: "5" },
  { image: best, name: "Best Gin 750ml", price: "1000", id: "6" },
];

function Ginsellers({ handleClick, handleBuyNow, activeProduct }) {
  const [showModal, setShowModal] = React.useState(false);
  const { cartItems, addToCart, removeFromCart } =
    useContext(CartContext) || {};

 

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
      <div className="container flex w-screen overflow-x-hidden gap-6"
      style={{borderRadius: '25px'}}>
        <Carousel>
          {cards.map((product) => (
            <CarouselItem key={product.id}>
              <div
                className="whiskey-product-card border-gray-200 px-6 py-0 rounded-lg border-2 shadow dark:border-gray-700 w-40 h-80 sm:w-60 sm:h-100 md:w-60 md:h-100 xl:w-80 xl:h-120 gap-8 bg-[#BBC3A4] "
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

export default Ginsellers;
