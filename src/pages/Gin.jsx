import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import Cart from './Cart.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Gin() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([])
  const { cartItems, addToCart , removeFromCart} = useContext(CartContext)

  const toggle = () => {
    setshowModal(!showModal);
  };

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const notifyAddedToCart = (item) => toast.success(`${item.title} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#fff',
      color: '#000',
    }
    });

  const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff',
    }
    });

    const handleRemoveFromCart = (product) => {
      removeFromCart(product);
      notifyRemovedFromCart(product);
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <ToastContainer />
      
      {/* Header Section */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
            {!showModal && (
              <button 
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-sm font-semibold text-white rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-200"
                onClick={toggle}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                <span>Cart ({cartItems.length})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="object-cover object-center w-full h-48 group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {product.title}
                </h2>
                <p className="mt-2 text-xl font-bold text-indigo-600">
                  Ksh {product.price.toLocaleString()}
                </p>

                <div className="mt-6">
                  {!cartItems.find(item => item.id === product.id) ? (
                    <button 
                      className="w-full inline-flex justify-center items-center px-4 py-2 bg-indigo-600 text-sm font-semibold text-white rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-200"
                      onClick={() => {
                        addToCart(product);
                        notifyAddedToCart(product);
                      }}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                      <button
                        className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-200"
                        onClick={() => {
                          const cartItem = cartItems.find(item => item.id === product.id);
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCart(product);
                          } else {
                            removeFromCart(product);
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold text-gray-900">
                        {cartItems.find(item => item.id === product.id).quantity}
                      </span>
                      <button
                        className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-colors duration-200"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Cart showModal={showModal} toggle={toggle} />
    </div>
  )
}
