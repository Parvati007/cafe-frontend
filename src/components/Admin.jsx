import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './Admin.css';

export default function Admin() {
  const location = useLocation();
  return (
    <div className="admin-container">
      <div className="admin-nav">
        <Link to="/admin" className={location.pathname === "/admin" ? "active-link" : ""}>
          Users
        </Link>
        <Link to="/admin/products" className={location.pathname.includes("products") ? "active-link" : ""}>
          Products
        </Link>
        <Link to="/admin/orders" className={location.pathname.includes("orders") ? "active-link" : ""}>
          Orders
        </Link>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
