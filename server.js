// server.js

const express = require('express');
const app = express();
const port = 5000; // Define the port number for your API

const dataList = require('./index.js'); // Import list from index.js

// Define a route to serve the list as an API
app.get('/api/data', (req, res) => {
  res.json(dataList); // Send the list as a JSON response
});

// init server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
