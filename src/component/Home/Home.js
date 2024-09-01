// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-gray-300 to-gray-600 py-12 text-center text-white">
        <h2 className="text-5xl font-extrabold leading-tight mb-2">
          Welcome to JR Shop!
        </h2>
        <p className="text-xl mb-4">Find the best jerseys for all sports.</p>
        <Link to="/products">
          <button className="btn btn-primary">Shop Now</button>
        </Link>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Product Card */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <figure>
              <img
                src="https://via.placeholder.com/300"
                alt="Product 1"
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h3 className="text-2xl font-semibold mb-2">Jersey Name 1</h3>
              <p className="text-gray-700 mb-4">$29.99</p>
              <Link to="/product/1">
                <button className="btn btn-primary w-full">Buy Now</button>
              </Link>
            </div>
          </div>

          {/* Add more product cards here */}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our most popular jerseys.
          </p>
          {/* Similar to New Arrivals section, add product cards here */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p className="text-sm">&copy; 2024 JR Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
