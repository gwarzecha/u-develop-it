const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/database');

const apiRoutes = require('./routes/apiRoutes');


// port designation
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use routes
app.use('/api', apiRoutes);


// Default response for any request not found, catch all
app.use((req, res) => {
  res.status(404).end();
});

// starts up server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}. http://localhost:${PORT}`);
  });
});
