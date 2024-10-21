import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartProvider } from "../context/cart";
import Hero from "../components/Hero/Hero";
import Ginsellers from "../pages/Ginsellers";
import Whiskeysellers from "../pages/Whiskeysellers";
import Cart from "../pages/Cart";
import logo from "../components/assets/logo.jpg";

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
    <div className="min-h-screen bg-gray-100">
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="text-center p-4 md:p-8 bg-black bg-opacity-50 rounded-lg">
          <h1
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white"
            data-aos="zoom-out"
          >
            Mapema ndo Best!!
          </h1>
          <p className="text-md md:text-xl lg:text-2xl font-semibold mb-6 text-green-400">
            Get affordable drinks delivered straight to your doorstep. Chaser pia ziko.
          </p>
          <Link
            to="/shop"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <CartProvider>
          <Cart />
        </CartProvider>

        {/* Add your other components here */}
        {/* <Hero />
        <Ginsellers />
        <Whiskeysellers /> */}
      </div>
    </div>
  );
};

export default Home;
