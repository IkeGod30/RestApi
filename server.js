const express = require('express');
const app = express()
const mongoose = require('mongoose');
const mongodb = require('mongodb'); //Remove

mongoose.connect('mongodb://0.0.0.0:27017/subscribers', { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(3000, () => console.log('Server Started'))
