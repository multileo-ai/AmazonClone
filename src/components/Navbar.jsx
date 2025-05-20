import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="Navmain">
        <div>
          <img
            className="logo"
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
            alt=""
          />
        </div>
        <div className="loca">
          <p>Deliver to Ashutosh</p>
          <h1>Loni Kalbhor 412201</h1>
        </div>
        <div className="sbox">
          <div className="dd">
            <p>All</p>
            <img className="arrow" src="arrow.png" alt="" />
          </div>
          <p className="stxt">Search Amazon.in</p>
          <div className="search">
            <img src="search.png" alt="" />
          </div>
        </div>
        <div className="lang">
          <img src="india.png" alt="" />
          <h3 className="language">EN</h3>
          <img className="arrow" src="arrow.png" alt="" />
        </div>
        <div className="acc">
          <div className="wrap1">
            <p>Hello, Ashutosh</p>
            <h1>Account & Lists</h1>
          </div>
          <img src="arrow.png" alt="" />
        </div>

        <div className="ro">
          <p>Return</p>
          <h1>& Order</h1>
        </div>
        <div className="cart">
          <img src="cart.png" alt="" />
          <p>Cart</p>
        </div>
      </nav>

      <nav className="nav2">
        <div className="all">
          <img className="menu" src="menuic.png" alt="" />
          <p>All</p>
        </div>
        <div>AmazonBasics</div>
        <div>Keep Shopping for</div>
        <div>MX Player</div>
        <div>Sell</div>
        <div>Gift Ideas</div>
        <div>Today's Deals</div>
        <div>Buy Again</div>
        <div>Browsing History</div>
        <div>Home Improvement</div>
        <div>Books</div>
        <div>Ashutosh's Amazon.in</div>
        <div>Gift Cards</div>
        <div>Bestsellers</div>
        <div>New Releases</div>
      </nav>
    </div>
  );
};

export default Navbar;
