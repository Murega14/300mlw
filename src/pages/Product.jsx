import React from "react";
import { Link } from "react-router-dom";
import gin from "../components/assets/gin2.png";
import whiskey from "../components/assets/whiskey.png";
import vodka from "../components/assets/vodka.png";
import beer from "../components/assets/bg.png";
import wine from "../components/assets/wine.png";
import rum from "../components/assets/rum.png";
import tequila from "../components/assets/tequila.png";
import mixers from "../components/assets/mixers.png";
import cigs from "../components/assets/cigs.png";

const cards = [
  { Image: gin, name: "Shop Gin", route: "/gin" },
  { Image: whiskey, name: "Shop Whiskey", route: "/whiskey" },
  { Image: vodka, name: "Shop Vodka", route: "/vodka" },
  { Image: beer, name: "Shop Beer", route: "/beer" },
  { Image: wine, name: "Shop Wine", route: "/wine" },
  { Image: rum, name: "Shop Rum", route: "/rum" },
  { Image: tequila, name: "Shop Tequila", route: "/tequila" },
  { Image: mixers, name: "Shop Mixers", route: "/mixers" },
  { Image: cigs, name: "Shop Cigarettes", route: "/cigs" },
];

function Product({ handleClick, handleChange }) {
  return (
    <>
      <div className="shop-products p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 m-2 sm:m-4 md:m-6 lg:m-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.route}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={card.Image}
                alt={card.name}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
              />
              <div className="p-2 sm:p-3 md:p-4">
                <p className="text-gray-900 text-sm sm:text-base md:text-lg font-semibold truncate">
                  {card.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
