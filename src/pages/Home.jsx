import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartProvider } from "../context/cart";
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
    <div className="min-h-screen">
      {/* Discount Banner */}
      <div className="w-full bg-yellow-200 text-center py-2">
        <p className="text-sm">
          Discount will be applied at checkout for KSh 4,000 off your first order!
        </p>
      </div>

      {/* Main Content */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Logo */}
        <div className="relative z-10 pt-8">
          <h1 className="text-6xl font-bold text-white text-center">300 ML</h1>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4">
          <h2 
            className="text-5xl md:text-6xl font-bold text-white text-center mb-6"
            data-aos="fade-up"
          >
            Unbox, Bless, Enjoy.
          </h2>
          
          <p 
            className="text-xl md:text-2xl text-white text-center mb-8 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover why we're the Eldoret's #1 Liqour Store.
          </p>

          <Link
            to="/shop"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started
          </Link>
        </div>

        {/* Bottom Wine Bottles Section */}
        <div className="relative z-10 w-full overflow-hidden">
          <div className="flex justify-center items-end space-x-4 px-4 mt-8">
            {/* This would be replaced with actual wine bottle images */}
            <div className="w-24 h-64 bg-opacity-80"></div>
            <div className="w-24 h-64 bg-opacity-80"></div>
            <div className="w-24 h-64 bg-opacity-80"></div>
            <div className="w-24 h-64 bg-opacity-80"></div>
            <div className="w-24 h-64 bg-opacity-80"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <CartProvider>
          <Cart />
        </CartProvider>
      </div>
    </div>
  );
};

export default Home;