const express = require('express');
const app = express();
const morgan = require('morgan');

const ThingFinderRouter = require('./routes/thingFinder');

const PORT = 9000;

//middleware
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/items', ThingFinderRouter);

//server start-up logic
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
})
