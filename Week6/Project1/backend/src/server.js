

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { errorHandler } = require('./middlewares/error.middleware.js');
const {connectDb} = require('./models/database.js');

// Load environment variables from .env file
dotenv.config();



const { PORT } = process.env;
connectDb();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure custom logger middleware

app.use(cookieParser());
app.use(cors());

// Assign Routes

app.use('/api/goals', require('./routes/router.js'));
app.use('/api/users', require('./routes/user.routes.js'));


app.use(errorHandler);




app.listen(
    PORT,
    () => console.info('Server listening on port ', process.env.PORT)
);