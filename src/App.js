import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Route/Cart';
import Gallery from './Route/Gallery';
import data from './Data.js';
import { useState } from 'react';

function App() {

  const [cartProducts, setCartProducts] = useState([])
  const handleAddToCart = (product) =>{
    setCartProducts(cartProducts=>[...cartProducts,{item:product,quantity:1}])
  }

const {productItems} = data;

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/cart' element={<Cart cartProducts={cartProducts}/>}>
          </Route>
        </Routes>
        
        <Routes>
          <Route exact path='/' element={<Gallery productItems={productItems} handleAddToCart={handleAddToCart}/>}>
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;