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
        className="landing bg-black-100 flex items-center justify-center max-h-screen w-full relative mb-0"
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
      className="home bg-[#D7E4C0] overflow-hidden scroll-smooth w-screen">
        {/* Sections */}
        <div className="container flex flex-col mt-4 bg-[#D7E4C0]">
          {/* Best Sellers Section */}
          <section 
            className="p-4 m-4 rounded box-content bg-inherit w-screen" 
            style={{ borderRadius: "25px" }}
          >
            <header
              className="best-seller-content-header mb-0"
              data-aos="zoom-out"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="best-seller-content-header text-black-100 text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                  Best Sellers
                </span>
              </h3>
            </header>
            <article className="" style={{ borderRadius: "30px" }}>
              <Hero
                addToCart={addToCart}
                notifyAddedToCart={notifyAddedToCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            </article>
          </section>

          {/* Gin Best Sellers Section */}
          <section
            className="p-4 m-4 rounded box-content bg-inherit "
            style={{ borderRadius: "25px" }}
          >
            <header className="gin-content-header mb-0">
              <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-6 p-4 text-black-100">
                <span className="best-seller-content-header text-black-100 text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Gin Best Sellers
                </span>
              </h3>
            </header>
            <article
              className=" solid rounded "
              style={{ borderRadius: "30px" }}
            >
              <Ginsellers
                cards={cards}
                handleClick={handleClick}
                handleChange={handleChange}
              />
              <Link
                to="/gin"
                className="shop-link text-white bg-blue-800 font-bold py-2 px-4 rounded mt-4 mb-4 inline-block"
              >
                Shop Gin
              </Link>
            </article>
          </section>

          {/* Whiskey Best Sellers Section */}
          <section
            className="p-4 m-4 rounded box-content bg-inherit"
            style={{ borderRadius: "25px" }}
          >
            <header className="whiskey-content-header mb-0">
              <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="best-seller-content-header text-black-100 text-4xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Whiskey Best Sellers
                </span>
              </h3>
            </header>
            <article className="solid rounded w-full" style={{ borderRadius: "30px" }}>
              <Whiskeysellers
                cards={cards}
                handleClick={handleClick}
                handleChange={handleChange}
              />
              <Link
                to="/whiskey"
                className="shop-link text-white bg-blue-800 font-bold py-2 px-4 rounded mt-4 mb-4 inline-block"
              >
                Shop Whiskey
              </Link>
            </article>
          </section>
        </div>

        <CartProvider>
          <Cart />
        </CartProvider>
      </div>

      <footer className="rounded-lg shadow bg-[#B3A398] m-0 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://300mlw.vercel.app"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                300ML
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
              <li>
                <span>Located opposite Starbucks Hotel Eldoret</span>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-black">
            © 2024{" "}
            <a href="https://github.com/Murega14" class="hover:underline">
              Bravin Murega™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Home;
