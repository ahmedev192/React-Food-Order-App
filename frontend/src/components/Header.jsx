import React from "react";
import logo from "../assets/logo.jpg";
// import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <nav id="main-header">
      <div id="title">
        <img src={logo} alt="FoodPoint Logo" />
        <h1>FoodPoint</h1>
      </div>
      <div>
        <button>
          {/* <FaShoppingCart /> */}
          Cart (0)
        </button>
      </div>
    </nav>
  );
}
