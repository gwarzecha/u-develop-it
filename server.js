const express = require('express');

// port designation
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Default response for any request not found, catch all
app.use((req, res) => {
  res.status(404).end();
});

// starts up server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. http://localhost:${PORT}`);
})