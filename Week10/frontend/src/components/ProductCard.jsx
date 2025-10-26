import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-32 object-cover mb-3 rounded"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-3">Rs {product.price.toLocaleString()}</p>
      <button
        onClick={() => onAdd(product)}
        className="bg-blue-600 text-white px-4 py-2 mb-3 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
