const express = require('express');
const mongoose = require('mongoose');
const app = express();

const employeeRoutes = require('./routes/employee');
const userRoutes = require('./routes/user');

// DB connection
mongoose.connect('mongodb+srv://akshay:Akki123@cluster0.mabdu.mongodb.net/gmoney?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((err) => {
    console.log('DB connection failed!');
    console.log(err);
  });

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS HEADERS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
   );
  next();
});

app.use('/api/employee', employeeRoutes);
app.use('/api/user', userRoutes);

module.exports = app;

