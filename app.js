const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Import routes
const planRoutes = require('./routes/planRoutes');
const userRoutes = require('./routes/userRoutes');

// Import DB connection utility
const connectDB = require('./utils/dbConnect');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/plans', planRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

