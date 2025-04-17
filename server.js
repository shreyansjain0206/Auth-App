const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const User = require('./models/user');

// const app = express();
// const PORT = 3000;

// // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/E-com', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// }).then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => console.log('❌ MongoDB Error:', err));

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve HTML pages
// app.get('/register', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'register.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'login.html'));
// });

// // Register User
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.send('User already exists! Please login.');
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });

//     await newUser.save();
//     res.send('Registration successful! <a href="/login">Login here</a>.');
//   } catch (err) {
//     res.status(500).send('Error registering user.');
//   }
// });

// // Login User
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.send('Invalid username or password.');

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.send('Invalid username or password.');

//     res.send(`Welcome back, ${username}!`);
//   } catch (err) {
//     res.status(500).send('Error logging in.');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
