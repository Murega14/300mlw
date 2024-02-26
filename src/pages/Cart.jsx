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
    <>
      showModal && (
      <div className=" flex items-center border-4 border-red-600  fixed inset-0 bg-gradient-to-r from-slate-900 to-slate-700 gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm m-19">
        <ToastContainer />
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-green-8 text-xs font-bold uppercase border-r-4 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close Cart
          </button>
        </div>
        <table className="border-collapse items-start float-start overflow-auto ">
          
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-400 px-4 py-2">
                  <img
                    src={item.thumbnail || item.image || item.Image}
                    alt={item.title || item.name}
                    className="rounded-md w-24 h-24"
                  />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {item.title || item.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ksh {item.price}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      const cartItem = cartItems.find(
                        (product) => product.id === item.id
                      );
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
              </tr>
            ))}
          </tbody>
        </table>
        <aside className="float-right border-separate border-red-50">
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-md font-bold mb-4">Total: Ksh {getCartTotal()}</h2>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
        </aside>
        
      </div>
      <article>
      <Link
        to="/checkout"
        className="text-yellow-600 hover:text-white font-semibold text-sm items-baseline justify-center"
      >
        Proceed to Checkout
      </Link>
    </article>
    )
    </>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
