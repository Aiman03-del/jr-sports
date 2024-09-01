import React from "react";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Classic Jersey",
    price: "$29.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Retro Jersey",
    price: "$34.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sports Jersey",
    price: "$39.99",
    image: "https://via.placeholder.com/150",
  },
];

const Product = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{product.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
