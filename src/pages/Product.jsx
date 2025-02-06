import React from 'react';
import { motion } from 'framer-motion';
import gin from "../components/assets/gin2.png";
import whiskey from "../components/assets/whiskey.png";
import vodka from "../components/assets/vodka.png";
import beer from "../components/assets/bg.png";
import wine from "../components/assets/wine.png";
import rum from "../components/assets/rum.png";
import tequila from "../components/assets/tequila.png";
import mixers from "../components/assets/mixers.png";
import cigs from "../components/assets/cigs.png";

const CategoryCard = ({ image, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-xl bg-black/60 backdrop-blur-lg shadow-lg"
  >
    <img 
      src={image}
      alt={title}
      className="w-full h-48 object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
      <h3 className="text-xl font-bold text-neon-pink mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Product = () => {
  const categories = [
    { image: gin, title: "Gin", description: "Botanical blends for the refined palate" },
    { image: whiskey, title: "Whiskey", description: "From Scotland to Kentucky, discover liquid gold" },
    { image: vodka, title: "Vodka", description: "Crystal clear, infinitely mixable" },
    { image: beer, title: "Beer", description: "Craft brews and classic lagers" },
    { image: wine, title: "Wine", description: "Red, white, and everything divine" },
    { image: rum, title: "Rum", description: "Caribbean spirit for tropical nights" },
    { image: tequila, title: "Tequila", description: "The heart and soul of Mexico" },
    { image: mixers, title: "Mixers", description: "Essential companions for your spirits" },
    { image: cigs, title: "Cigarettes", description: "Premium tobacco products" }
  ];

  return (
    <div className="min-h-screen  text-white">
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?cs=srgb&dl=pexels-chris-f-38966-1283219.jpg&fm=jpg')] bg-cover bg-center opacity-100"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neon-blue mb-4 font-serif animate-pulse">
            300 ML
          </h1>
          <p className="text-xl text-gray-300 italic">
            Gani Mkubwa?
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-400">
          <p className="text-sm text-gray-300">Must be 18 or older to purchase. Please drink responsibly.</p>
        </footer>
      </div>
    </div>
  );
};

export default Product;
