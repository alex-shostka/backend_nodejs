const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const usersRouters = require('./routes/users');
const zonesRouters = require('./routes/zones.js');

require('dotenv').config();

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log('MongoDB connected.');
  })
  .catch(error => {
    console.log(error);
  });

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRouters);
app.use('/api/zones', zonesRouters);

module.exports = app;
