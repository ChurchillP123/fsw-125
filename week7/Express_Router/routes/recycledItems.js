const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let recycledItems = [
    {name: "Bottle of Water", edible: true, types: ['Crystal Geyser', 'Aquafina', 'Fiji'], description: "a bottle of water", recyclable: true, quantity: 1, price_per_unit: 3, _id: uuidv4()},
    {name: "Box of Cereal", edible: true, types: ['Lucky Charms', 'Apple Jacks', 'Cheerios'], description: "a box of cereal", recyclable: true, quantity: 1, price_per_unit: 5, _id: uuidv4()},
    {name: "Soup Can", edible: true, types: ['Chicken Noodle', 'Tomato', 'Minestrone'], description: "a can of soup", recyclable: false, quantity: 5, price_per_unit: 2, _id: uuidv4()},
    {name: "Paper", edible: false, types: ['Office Depot', 'Mead', 'Oxford'], description: "a stack of papers", recyclable: true, quantity: 50, price_per_unit: 7, _id: uuidv4()}
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.status(200).send(recycledItems);
    })

    .get('/:recyclable', (req, res) => {
        const recyclable = Boolean(req.params.recyclable);
        res.status(200).send(recycledItems.filter(item => item.recyclable === recyclable));
    })

    .get('/:itemId', (req, res) => {
        const id = req.params.itemId;
        const index = recycledItems.findIndex(item => item._id === id);
        if (!index) {
            const error = new Error('This item was not found');
            return next(error);
        }
        res.status(200).send(recycledItems[index]);
    })

    .get('/search/edible', (req, res) => {
        let edible = req.query.edible;
        edible === 'false' ? edible = false : edible = true;
        const filteredItems = recycledItems.filter(item => item.edible === edible);
        res.send(filteredItems);
    })

    .post('/', (req, res) => {
        const newRecycledItem = req.body;
        newRecycledItem._id = uuidv4();
        recycledItems.push(newRecycledItem);
        res.send(newRecycledItem);
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
        res.status(201).send('Resource successfully updated!');
    })

module.exports = recycledItemsRouter;