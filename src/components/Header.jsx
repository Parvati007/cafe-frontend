import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "../App";
export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <div className="navbar">
      <h1>CodeBrew Cafe</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">MyCart</Link>
        <Link to="/order">MyOrder</Link>
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.token ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link>}
      </div>
    </div>
  );
}


   

   