require('dotenv').config();
console.log('Starting QuickNote backend...');
console.log('DB connect function called');


const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notes');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://quicknote-frontend.onrender.com'
  ]
}));

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('QuickNote API is running');
});

app.use('/api/notes', notesRoutes);

// PORT FIX (IMPORTANT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
