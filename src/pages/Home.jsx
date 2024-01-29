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
import Product from "../pages/Product";

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
        <div className="text-box w-full text-center dark-bg-yellow-100">
          <h1
            className="text-4xl md:text-6xl lg:text-10xl font-bold mb-4 pb-4 pt-6"
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

      <div className="home min-h-screen overflow-hidden w-full box-sizing-border-box flex">
        {/* Left Side: Products */}
        <aside className="shop-products float-left w-30 border border-black-100">
          <h2>What are you Looking for?</h2>
          <ul>
            <li href="/gin">Gin</li>
            <li href="/whiskey">Whiskey</li>
            <li href="/vodka">Vodka</li>
            <li href="/rum">Rum</li>
            <li href="/beer">Beer</li>
            <li href="/wine">Wine</li>
            <li href="tequila">Tequila</li>
            <li href="/mixers">Mixers</li>
            <li href="cigs">Cigarettes</li>
          </ul>
        </aside>

        {/* Right Side: Sections */}
        <div className="flex flex-col w-full overflow-hidden h-100 mt-0">
          {/* Best Sellers Section */}
          <section className="p-4 border-solid m-6 rounded">
            <header
              className="best-seller-content-header mb-0"
              data-aos="zoom-out"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="best-seller-content-header text-black-800 text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Best Sellers
                </span>
              </h3>
            </header>
            <article className="bg-blue-100">
              <Hero
                addToCart={addToCart}
                notifyAddedToCart={notifyAddedToCart}
                handleQuantityChange={handleQuantityChange}
                cartItems={cartItems}
              />
            </article>
          </section>

          {/* Gin Best Sellers Section */}
          <section className="bg-yellow-100">
            <header
              className="gin-content-header bg-yellow-100"
              data-aos="zoom-out"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-blue-700">Gin Best Sellers</span>
              </h3>
            </header>
            <article className="bg-yellow-100 solid">
              <Ginsellers
                cards={cards}
                handleClick={handleClick}
                handleChange={handleChange}
              />
              <Link
                to="/gin"
                className="shop-link bg-blue-700 text-white font-bold py-2 px-4 rounded mt-0 mb-10 inline-block"
              >
                Shop Gin
              </Link>
            </article>
          </section>

          {/* Whiskey Best Sellers Section */}
          <section className="bg-gray-800">
            <header
              className="whiskey-content-header mb-2 bg:gray-800"
              data-aos="zoom-out"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-blue-700">Whiskey Best Sellers</span>
              </h3>
            </header>
            <article>
              <Whiskeysellers
                cards={cards}
                handleClick={handleClick}
                handleChange={handleChange}
              />
              <Link
                to="/whiskey"
                className="shop-link bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
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
    </>
  );
};

export default Home;
