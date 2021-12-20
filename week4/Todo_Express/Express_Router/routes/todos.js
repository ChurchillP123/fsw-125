const express = require('express');
const todosRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let Todos = [
    {name: "Clean my room", description: "Fold clothes, make up the bead, and vacuum the floor.", imageUrl: "https://media.istockphoto.com/photos/modern-living-room-interior-with-green-plants-sofa-and-green-wall-picture-id1318472213?b=1&k=20&m=1318472213&s=170667a&w=0&h=SxvPC07NCLiTNfoghiZfHokWM3XY4y70CiXCJ6v1fQM=", quantity: 1, pricePerUnit: 10, recyclable: false, _id: uuidv4()}, 
    {name: "Take out the trash.", description: "Collect all the trash from all the rooms and take to the curb.", imageUrl: "https://media.istockphoto.com/photos/hauling-garbage-picture-id1286996660?b=1&k=20&m=1286996660&s=170667a&w=0&h=1iZCui1UftPy9Mbm68QnKDpA6nf_RoFFn70PAfJamRQ=", quantity: 5, pricePerUnit: 10, recyclable: true, _id: uuidv4()}, 
    {name: "Make pizza", description: "Put frozen pizza in the microwave for 3 minutes.", imageUrl: "https://media.istockphoto.com/photos/bakery-chef-prepare-pizza-picture-id1291299956?b=1&k=20&m=1291299956&s=170667a&w=0&h=Ys_FLtdY0Uzc7yTQl6JzvCHTQ3eRAuqNNU4x8EX1FB8=", quantity: 2, pricePerUnit: 8.50, recyclable: true, _id: uuidv4()},
    {name: "Run 3 miles", description: "Run around the block for 3 miles", imageUrl: "https://media.istockphoto.com/photos/couple-running-in-berlin-picture-id1283639289?b=1&k=20&m=1283639289&s=170667a&w=0&h=W8MT60xjlRC_-64lO7DVCVo1pUt2cC-BbJZa4T4hl1s=", quantity: 3, pricePerUnit: 0, recyclable: false, _id: uuidv4()}
];

todosRouter
    .get('/', (req, res) => {
        res.send(Todos);
    })

    .get('/:todoId', (req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = Todos.findIndex(item => item._id === todoId);
        res.send(Todos[todoIndex]);
    })

    .post('/', (req, res) => {
        const newTodoItem = req.body;
        newTodoItem._id = uuidv4();
        Todos.push(newTodoItem);
        res.send(`Successfully added ${newTodoItem.name} to the Todo List.`);
    })

    .delete('/:todoId', (req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = Todos.findIndex(item => item._id === todoId);
        Todos.splice(todoIndex, 1);
        res.send('Resource successfully deleted!'); 
    })

    .put('/:todoId', (req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = Todos.findIndex(item => item._id === todoId);
        Object.assign(Todos[todoIndex], req.body);
        res.send('Resource successfully updated!');
    })

module.exports = todosRouter;