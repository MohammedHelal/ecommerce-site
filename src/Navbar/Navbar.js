import React from "react";
import "./navbar.css";
import Media from "react-media";

function Navbar() {
  return (
    <div id="navbar">
      <div id="logo">
        <h3 className="logo-items">eCommerce Company</h3>
      </div>
      <Media
        queries={{
          small: "(max-width: 900px)",
          large: "(min-width: 1000px)"
        }}
      >
        {(matches) => (
          <>
            {matches.large && (
              <ul>
                <li>
                  <a href="#" className="nav-links">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-links">
                    Jewelery
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-links">
                    Men's clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-links">
                    Women's clothing
                  </a>
                </li>
              </ul>
            )}
            {matches.small && (
              <div className="dropdown">
                <button className="dropbtn">
                  Categories
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#" className="nav-links">
                    Electronics
                  </a>
                  <a href="#" className="nav-links">
                    Jewelery
                  </a>
                  <a href="#" className="nav-links">
                    Men's clothing
                  </a>
                  <a href="#" className="nav-links">
                    Women's clothing
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </Media>
    </div>
  );
}

export default Navbar;
