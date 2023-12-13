import './App.css';
import Navbar from './components/assets/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Wine from './pages/Wine';
import Gin from './pages/Gin';
import Whiskey from './pages/Whiskey';
import Vodka from './pages/Vodka';
import Beer from './pages/Beer';

function App() {
    return (
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/wine' element={<Wine />} />
        <Route path='/gin' element={<Gin />} />
        <Route path='/whiskey' element={<Whiskey />} />
        <Route path='/vodka' element={<Vodka />} />
        <Route path='/beer' element={<Beer />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      </div> 
  );
}

export default App;
