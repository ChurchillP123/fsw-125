const express = require('express');
const app = express();

const recycledItemsRouter = require('./routes/recycledItems');

const PORT = 3000;

//middleware
app.use(express.json());

//route
app.use('/itemsIntake', recycledItemsRouter);

//server start-up logic
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
})
