const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')

mongoose.connect(keys.mongoURI)
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch(error => {
        console.log(error);
    })

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


module.exports = app;