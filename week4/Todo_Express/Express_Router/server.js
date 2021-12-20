const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

const PORT = 3000;

//middleware-ALL
app.use(express.json());

//middleware-route
app.use('/todos', todosRouter);

//server start-up logic
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
})
