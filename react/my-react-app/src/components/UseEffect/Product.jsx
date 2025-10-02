import React from "react";

export default function Product({ product }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        {product.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {product.description}
      </p>
      <div className="border-t pt-2 text-right">
        <span className="text-blue-500 text-sm font-medium cursor-pointer hover:underline">
          learn more →
        </span>
      </div>
    </div>
  );
}
