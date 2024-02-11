import React, { useEffect } from "react";
import "./styles/Home.css";
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
        className="landing bg-black-100 text-white flex items-center justify-center min-h-screen w-full relative mb-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-box w-full text-center dark-bg-yellow-100 ">
          <h1
            className="text-2xl sm:text-7xl md:text-3xl lg:text-8xl font-semibold m-10 p-7"
            data-aos="zoom-out"
          >
            Mapema ndo Best!!
          </h1>
          <p className="text-lg md:text-xl mb-4">
            <span className="text-black-800 dark:text-black-800">
              Get Affordable drinks
            </span>{" "}
            and have them delivered straight to your doorstep. Chaser pia ziko.
          </p>
          <Link
            to="/shop"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <div className="home min-h-screen bg-white overflow-hidden w-full box-sizing-border-box flex">
        {/* Left Side: Products */}
        <aside
          className="shop-products float-left w-30 border border-black-100 h-screen"
          style={{ backgroundColor: "teal" }}
        >
          <span className="text-black-100 text-[15px] mt-10">
            What are you Drinking?
          </span>
          <div
            className="container box-border h-screen"
            style={{ position: "sticky", top: "0" }}
          >
            <ul
              className="text-black-100"
              style={{ position: "sticky", top: "0", textColor: "white" }}
            >
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/gin"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Gin
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/whiskey"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Whiskey
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/vodka"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Vodka
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/rum"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Rum
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/beer"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Beer
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/wine"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Wine
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="tequila"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Tequila
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="/mixers"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Mixers
                </Link>
              </li>
              <li style={{ position: "sticky", top: "0" }}>
                <Link
                  to="cigs"
                  className="hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-5 py-3 transition-all"
                >
                  Cigarettes
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Side: Sections */}
        <div className="container flex flex-col w-full overflow-x-hidden overflow-auto h-screen mt-4">
          {/* Best Sellers Section */}
          <section className="p-4 m-6 rounded box-content bg-inherit">
            <header
              className="best-seller-content-header mb-0"
              data-aos="zoom-out"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="best-seller-content-header text-black-100 text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Best Sellers
                </span>
              </h3>
            </header>
            <article className="bg-blue-100" style={{ borderRadius: "30px" }}>
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
            className="p-4 m-6 rounded box-content bg-inherit "
            style={{ borderRadius: "30px" }}
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
            className="p-4 m-6 rounded box-content bg-inherit"
            style={{ borderRadius: "25px" }}
          >
            <header className="whiskey-content-header mb-0">
              <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="best-seller-content-header text-black-100 text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Whiskey Best Sellers
                </span>
              </h3>
            </header>
            <article className="solid rounded" style={{ borderRadius: "30px" }}>
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

      <footer className="bg-gray-400 rounded-lg shadow dark:bg-gray-900 m-0 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://300mlw.vercel.app"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                300ML
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <span>Located opposite Starbucks Hotel Eldoret</span>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
