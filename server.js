// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const dataList = require('./index.js'); 

// Root route to display a welcome message or API info
app.get('/', (req, res) => {
  res.send('Welcome to My API!'); 
});

// Define a route to serve the list as an API
app.get('/api/data', (req, res) => {
  res.json(dataList); // Send the list as a JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
