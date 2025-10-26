import React from "react";

export default function Cart({ cart, onCheckout, isOpen, onClose }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl p-5 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
                <p className="font-semibold">
                  Rs {(item.price * item.qty).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <p className="font-semibold text-lg mb-3">
              Total: Rs {total.toLocaleString()}
            </p>
            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
