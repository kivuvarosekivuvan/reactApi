import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Login from './Login';
import Products from './Products';
import Product from './Product';
import AddProduct from './AddProduct';
function App() {
  return (
    <div >
     {/* <Login/>
     <Products/> */}
     <Router>
      {/* <nav>
        <Link to="/"> LOGIN </Link>
        <Link to="/products"> PRODUCTS</Link>
        <Link to="/description/:id"> PRODUCT DESCRIPTION </Link>
      </nav> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/newproduct" element={<AddProduct />} />
       
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
