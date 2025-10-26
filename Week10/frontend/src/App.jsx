import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import image from "./assets/images.jfif";

const products = [
  { id: 1, name: "Wireless Headphones", price: 4999, image },
  { id: 2, name: "Smart Watch", price: 8999, image },
  { id: 3, name: "Mechanical Keyboard", price: 6999, image },
  { id: 4, name: "Gaming Mouse", price: 2999, image },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
    setIsCartOpen(true); // open cart on add
  };

const checkout = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/payment/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = data.url;
    } else {
      alert("Checkout failed: " + data.error);
      console.error("Checkout failed:", data.error);
    }
  } catch (err) {
    console.error("Network error:", err);
    alert("Network error connecting to backend");
  }
};



  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Demo Store</h1>
        <button
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100"
          onClick={() => setIsCartOpen(true)}
        >
          🛒 Cart ({cart.reduce((acc, i) => acc + i.qty, 0)})
        </button>
      </header>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>

      <Cart
        cart={cart}
        onCheckout={checkout}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}
