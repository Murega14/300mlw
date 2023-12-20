import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/assets/Navbar/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Wine from './pages/Wine';
import Gin from './pages/Gin';
import Whiskey from './pages/Whiskey';
import Vodka from './pages/Vodka';
import Beer from './pages/Beer';

function App() {
  const [cart, setCart] = React.useState([]);
  const [setShow] = React.useState(true);

  const handleClick = (cards) => {
    const existingItem = cart.find((item) => item.id === cards.id);
    if (existingItem) {
      // If the item exists, update the quantity
      setCart(
        cart.map((item) =>
          item.id === cards.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      // Add the item to the cart
      setCart([...cart, { ...cards, amount: 1 }]);
    }
  };

  const handleChange = (cards, d) => {
    // Adjust quantity or remove item from cart
    if (d === 0) {
      setCart(cart.filter((item) => item.id !== cards.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === cards.id ? { ...item, amount: item.amount + d } : item
        )
      );
    }
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart cart={cart} handleChange={handleChange} setCart={setCart} />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/gin" element={<Gin />} />
        <Route path="/whiskey" element={<Whiskey />} />
        <Route path="/vodka" element={<Vodka />} />
        <Route path="/beer" element={<Beer />} />
        {/* Add more routes as needed */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
