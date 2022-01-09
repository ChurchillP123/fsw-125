const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');



let recycledItems = [
    {name: "water", description: "a bottle of water", recyclable: false, quantity: 1, price_per_unit: 3, _id: uuidv4()},
    {name: "cereal", description: "a box of cereal", recyclable: true, quantity: 1, price_per_unit: 5, _id: uuidv4()},
    {name: "soup", description: "a can of soup", recyclable: false, quantity: 5, price_per_unit: 2, _id: uuidv4()},
    {name: "paper", description: "a stack of papers", recyclable: true, quantity: 50, price_per_unit: 7, _id: uuidv4()}
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.send(recycledItems);
    })

    .get('/search/recyclable', (req, res) => {

        function getBool(val) {
            return !!JSON.parse(String(val).toLowerCase());
        }

        const recyclable = getBool(req.query.recyclable);
        const filteredItems = recycledItems.filter(item => item.recyclable === recyclable);
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
        res.send('Resource successfully updated!');
    })

module.exports = recycledItemsRouter;