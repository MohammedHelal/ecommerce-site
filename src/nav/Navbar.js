import "./navbar.css";
import React from 'react';
import { Link } from "react-router-dom";

function Navbar({ changeUrl, changeName, cartNum }) {
  function something(e){
    //Call function to switch categories
    changeUrl(e.target.id);
    changeName(e.target.id);
  }

  return (
    <div id="navbar">
        <div id="logo">
          <Link to="/"><h3 className="logo-items">eCommerce Company</h3></Link>
        </div>
        <div className="rightNav">
          <div className="dropdown">
            <button className="dropbtn">
              Products <i className="fa fa-caret-down" style={{verticalAlign: "sub"}}></i>
            </button>
            <div className="dropdown-content">
              <Link to="/"><button id="navAll" onClick={something} className="navbtn">All Items</button></Link>
              <Link to="/"><button id="navElectronics" onClick={something} className="navbtn">Electronics</button></Link>
              <Link to="/"><button id="navJewelery" onClick={something} className="navbtn">Jewelery</button></Link>
              <Link to="/"><button id="navMens" onClick={something} className="navbtn">Men's clothing</button></Link>
              <Link to="/"><button id="navWomens" onClick={something} className="navbtn">Women's clothing</button></Link>
            </div>
          </div>
          <div className="cart">
            <Link to="/cart">
              <button>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> {cartNum}
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar


/*
import Media from 'react-media';
<Media queries={{
          small: "(max-width: 1100px)",
          large: "(min-width: 1100px)"
        }}>
            {matches => (
              <>
                {matches.large && <ul>
                      <li><button id="All Items" onClick={(e) => something('https://fakestoreapi.com/products', e)} className="navbtn">All Items</button></li>
                      <li><button id="Electronics" onClick={(e) => something('https://fakestoreapi.com/products/category/electronics', e)} className="navbtn">Electronics</button></li>
                      <li><button id="Jewelery" onClick={(e) => something('https://fakestoreapi.com/products/category/jewelery', e)} className="navbtn">Jewelery</button></li>
                      <li><button id="Men's clothing" onClick={(e) => something("https://fakestoreapi.com/products/category/men's%20clothing", e)} className="navbtn">Men's clothing</button></li>
                      <li><button id="Women's clothing" onClick={(e) => something("https://fakestoreapi.com/products/category/women's%20clothing", e)} className="navbtn">Women's clothing</button></li>
                  </ul>}
                {matches.small && 
                  <div className="dropdown">
                    <button className="dropbtn">Categories
                      <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                      <button id="All Items" onClick={(e) => something('https://fakestoreapi.com/products', e)} className="navbtn">All Items</button>
                      <button id="Electronics" onClick={(e) => something('https://fakestoreapi.com/products/category/electronics', e)} className="navbtn">Electronics</button>
                      <button id="Jewelery" onClick={(e) => something('https://fakestoreapi.com/products/category/jewelery', e)} className="navbtn">Jewelery</button>
                      <button id="Men's clothing" onClick={(e) => something("https://fakestoreapi.com/products/category/men's%20clothing", e)} className="navbtn">Men's clothing</button>
                      <button id="Women's clothing" onClick={(e) => something("https://fakestoreapi.com/products/category/women's%20clothing", e)} className="navbtn">Women's clothing</button>
                    </div>
                  </div>}
              </>
            )}
        </Media>
*/