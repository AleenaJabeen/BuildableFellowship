import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Canceled ❌</h1>
      <p className="text-gray-600 mb-6">It looks like you canceled your payment. You can try again anytime.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Back to Store
      </button>
    </div>
  );
}
