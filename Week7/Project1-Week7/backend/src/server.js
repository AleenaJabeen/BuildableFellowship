



const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./models/database.js');

// Connect to Database
connectDB();



const { PORT } = process.env;


// Instantiate an Express Application
const app = express();


// Configure Express App Instance
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));



app.use(cookieParser());
app.use(cors());

// This middleware adds the json header to every response

// Assign Routes

app.use('/user', require('./routes/user.route.js'));

// Open Server on selected Port
app.listen(
    PORT,
    () => console.info('Server listening on port ', PORT)
);