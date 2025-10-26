

const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv');
const paymentRoutes=require('./routes/route.js')


// Load environment variables from .env file
dotenv.config();



const { PORT } = process.env;


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure custom logger middleware

app.use(cors());

// Assign Routes

app.get("/", (req, res) => {
  res.send("Stripe Checkout API is running 🚀");
});

app.use("/api/payment", paymentRoutes);






app.listen(
    PORT,
    () => console.info('Server listening on port ', process.env.PORT)
);