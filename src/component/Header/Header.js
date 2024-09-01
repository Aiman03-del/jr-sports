// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-primary">JR Shop</h1>
        <nav className="space-x-6">
          <Link to="/" className="btn btn-ghost hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="btn btn-ghost hover:text-primary">
            Products
          </Link>
          <Link to="/about" className="btn btn-ghost hover:text-primary">
            About Us
          </Link>
          <Link to="/contact" className="btn btn-ghost hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
