import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Ginsellers from "../pages/Ginsellers";
import Whiskeysellers from "../pages/Whiskeysellers";
import { CartProvider } from "../context/cart";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../components/assets/logo.jpg";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";

const Home = ({
  cards,
  handleChange,
  handleClick,
  notifyAddedToCart,
  addToCart,
  handleQuantityChange,
  cartItems,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section
        className="landing bg-black-100 flex items-center justify-center h-screen w-full relative mb-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-box w-full text-center">
          <h1
            className=" sm:text-xl md:text-4xl lg:text-8xl font-bold m-6 p-7"
            data-aos="zoom-out"
          >
            Mapema ndo Best!!
          </h1>
          <p className="text-lg md:text-2xl font-semibold mb-4 m-10 p-7 dark:text-blue-600 text-green-400">
              Get Affordable drinks and have them delivered straight to your doorstep. Chaser pia ziko.
          </p>
          <Link
            to="/shop"
            
            className="bg-blue-800 dark:bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <div 
      className="home bg-[#fdfdfd] overflow-hidden scroll-smooth w-screen">
        {/* Sections */}
        

        <CartProvider>
          <Cart />
        </CartProvider>
      </div>

      
    </>
  );
};

export default Home;
