import React from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

export default function Header() {
  return (
    <>
      <nav id="main-header">
        <div id="title">
          <img src={logo} alt="" />
          <h1>FoodPoint</h1>
        </div>
        <div>
          <button>Cart (0)</button>
        </div>
      </nav>
    </>
  );
}
