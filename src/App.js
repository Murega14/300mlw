import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Wine from './pages/Wine';
import Gin from './pages/Gin';
import Whiskey from './pages/Whiskey';
import Vodka from './pages/Vodka';
import Beer from './pages/Beer';
import Cigarettes from './pages/Cigarettes';
import Checkout from './pages/Checkout'
import { CartProvider } from './context/cart';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any fallback UI here
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <React.Fragment>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/wine" element={<Wine />} />
            <Route path="/gin" element={<Gin />} />
            <Route path="/whiskey" element={<Whiskey />} />
            <Route path="/vodka" element={<Vodka />} />
            <Route path='/shop' element={<Product />} />
            <Route path="/beer" element={<Beer />} />
            <Route path="/cigs" element={<Cigarettes />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </React.Fragment>
    </ErrorBoundary>
  );
}

export default App;
