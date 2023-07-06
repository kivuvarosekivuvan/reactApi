import { Link } from 'react-router-dom';
import React from 'react';
import '.style.css'

function NavBar(){
    return(
        <div>
               <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/addproduct">Add products</Link>
        </li>
      </ul>
    </nav>
        </div>
    )
};
export default NavBar