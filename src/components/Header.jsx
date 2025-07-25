import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "../App";

export default function Header() {
  const { user, cart } = useContext(AppContext);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="navbar">
      <h1>CodeBrew Cafe</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>

        <div className="cart-link-wrapper">
          <Link to="/cart">MyCart</Link>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>

        <Link to="/order">MyOrder</Link>
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}



   

   