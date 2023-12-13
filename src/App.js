import './App.css';
import Navbar from './components/assets/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';


function App() {
    return (
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/wine' element={<ShopCategory />} />
        <Route path='/gin' element={<ShopCategory />} />
        <Route path='/whiskey' element={<ShopCategory />} />
        <Route path='/vodka' element={<ShopCategory />} />
        <Route path='/beer' element={<ShopCategory />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      </div> 
  );
}

export default App;
