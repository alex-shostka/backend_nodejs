const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth');
const usersRouters = require('./routes/users');
const {config} = require('dotenv');

config();

mongoose.connect(process.env.DB_CONNECT)
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

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routers
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRouters)

module.exports = app;