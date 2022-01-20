const express = require('express');
const app = express();
const morgan = require('morgan');

const recycledItemsRouter = require('./routes/recycledItems');

const PORT = 9000;

//middleware
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/itemsIntake', recycledItemsRouter);

//global error-handler 
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})

//server start-up logic
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
})
