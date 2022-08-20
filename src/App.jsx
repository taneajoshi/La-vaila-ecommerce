import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/Home';
import  Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';

const App = () => {
  const user = false; 
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
    </Routes>
  </Router>
  )
};

export default App; 
