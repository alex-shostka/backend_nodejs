const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth');
const zonesRoutes = require('./routes/zones');

mongoose.connect(keys.mongoURI)
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch(error => {
        console.log(error);
    })
    
app.use(passport.initialize());
require('./middleware/passport')(passport)


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/zones', zonesRoutes);

module.exports = app;