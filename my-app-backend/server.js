// A web framework for Node.js, used to create the server and handle HTTP requests.
const express = require('express'); 
// An Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies working with MongoDB by providing schema-based solutions.
const mongoose = require('mongoose');
// A module that loads environment variables from a .env file into process.env
const dotenv = require('dotenv');
// Importing route handlers related to authentication (such as login, registration) from the auth file located in the routes directory.
const authRoutes = require('./routes/auth');
// A package that enables Cross-Origin Resource Sharing (CORS). It allows your server to accept requests from different origins, which is necessary when your frontend and backend are running on different domains or ports.
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file

const app = express(); //Creates an Express application
app.use(express.json()); // Middleware to parse JSON data. It allows you to work with req.body when handling POST or PUT requests.
app.use(cors()); // This middleware enables CORS

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// API routes
// Any API request starting with /api/auth will be handled by the route handlers in the authRoutes module (such as login, registration, etc.).
app.use('/api/auth', authRoutes);

// Server listen
// It first checks if a PORT is defined in the environment variables (process.env.PORT), and if not, it defaults to port 5000.
const PORT = process.env.PORT || 5000;
// Starts the server, making it listen for incoming HTTP requests on the specified port.
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
