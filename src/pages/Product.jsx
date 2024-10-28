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
    <div className="p-6 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.route}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={card.Image}
                alt={card.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-lg font-semibold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {card.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
