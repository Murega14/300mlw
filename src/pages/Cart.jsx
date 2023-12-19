import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]); // Ensure cartItems is initialized as an empty array

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update cartItems and localStorage when cart changes
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0); // Ensure item.price is converted to a number
  };

  return (
    <div className="cart">
      {/* Display cart items */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      {/* Display subtotal */}
      <p>Subtotal: {calculateSubtotal()}</p>
      {/* Add items to cart */}
      <button onClick={() => addToCart({ name: 'Product', price: '10' })}>Add to Cart</button>
    </div>
  );
}

export default Cart;
