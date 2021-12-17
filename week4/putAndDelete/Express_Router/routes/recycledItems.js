const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



let recycledItems = [
    {name: "bottle of water", description: "a bottle of water", recyclabe: true, quantity: 1, price_per_unit: 3, _id: uuidv4()},
    {name: "box of cereal", description: "a box of cereal", recyclabe: true, quantity: 1, price_per_unit: 5, _id: uuidv4()},
    {name: "soup can", description: "a can of soup", recyclabe: true, quantity: 5, price_per_unit: 2, _id: uuidv4()},
    {name: "paper", description: "a stack of papers", recyclabe: true, quantity: 50, price_per_unit: 7, _id: uuidv4()}
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.send(recycledItems);
    })

    .post('/', (req, res) => {
        const newRecycledItem = req.body;
        newRecycledItem._id = uuidv4();
        recycledItems.push(newRecycledItem);
        res.send(`Successfully added ${newRecycledItem.name} to the database of recycled items`);
    })

    .delete('/:recycledId', (req, res) => {
        const recycledId = req.params.recycledId;
        const recycledIndex = recycledItems.findIndex(item => item._id === recycledId);
        recycledItems.splice(recycledIndex, 1);
        res.send('Resource successfully deleted!'); 
    })

    .put('/:recycledId', (req, res) => {
        const recycledId = req.params.recycledId;
        const recycledIndex = recycledItems.findIndex(item => item._id === recycledId);
        Object.assign(recycledItems[recycledIndex], req.body);
        res.send('Resource successfully updated!');
    })

module.exports = recycledItemsRouter;