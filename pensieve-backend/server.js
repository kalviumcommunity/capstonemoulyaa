const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth'); 

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// POST /api/auth/signup

// json
// Copy
// Edit
// {
//   "username": "harrypotter",
//   "email": "harry@hogwarts.edu",
//   "password": "expelliarmus"
// }
// POST /api/auth/signin

// json
// Copy
// Edit
// {
//   "email": "harry@hogwarts.edu",
//   "password": "expelliarmus"
// }
// PUT /api/auth/changepassword/:id

// json
// Copy
// Edit
// {
//   "oldPassword": "expelliarmus",
//   "newPassword": "sectumsempra"
// }