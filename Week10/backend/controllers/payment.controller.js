const dotenv = require("dotenv");
dotenv.config();
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    console.log("Incoming items:", req.body.items);
    console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY ? "Loaded ✅" : "❌ Missing");

    const { items } = req.body;
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd", // ✅ use 'usd' — 'pkr' is NOT supported by Stripe Checkout
        product_data: { name: item.name },
        unit_amount: item.price * 100, // amount in cents (USD smallest unit)
      },
      quantity: item.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("❌ Stripe session error:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createCheckoutSession };
