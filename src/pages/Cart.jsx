import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title || item.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center overflow-y-auto">
        <ToastContainer />
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto p-4 sm:p-6">
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggle}
          >
            ✕
          </button>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Image</th>
                  <th className="border-b px-4 py-2 text-left">Name</th>
                  <th className="border-b px-4 py-2 text-left">Price</th>
                  <th className="border-b px-4 py-2 text-left">Quantity</th>
                  <th className="border-b px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border-t px-4 py-2">
                      <img
                        src={item.thumbnail || item.image || item.Image}
                        alt={item.title || item.name}
                        className="w-16 h-16 rounded-md"
                      />
                    </td>
                    <td className="border-t px-4 py-2">{item.title || item.name}</td>
                    <td className="border-t px-4 py-2">Ksh {item.price}</td>
                    <td className="border-t px-4 py-2 flex items-center">
                      <button
                        className="px-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                        onClick={() => {
                          const cartItem = cartItems.find((product) => product.id === item.id);
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCart(item);
                          } else {
                            removeFromCart(item);
                          }
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td className="border-t px-4 py-2">
                      <button
                        className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            {cartItems.length > 0 ? (
              <div>
                <h2 className="text-lg font-semibold mb-4">Total: Ksh {getCartTotal()}</h2>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    clearCart();
                    notifyCartCleared();
                  }}
                >
                  Clear Cart
                </button>
              </div>
            ) : (
              <h2 className="text-xl font-semibold">Your cart is empty</h2>
            )}
          </div>
          <div className="mt-6 text-center">
            <Link
              to={cartItems.length > 0 ? "/checkout" : "#"}
              className="text-blue-600 hover:text-blue-800"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
