const express = require('express');
const ThingFinderRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const items = [
    {name: 'avocado', type: 'food', specific: "fruit", price: 20, _id: uuidv4()},
    {name: 'shirt', type: 'clothing', price: 40, _id: uuidv4()},
    {name: 'lego set', type: 'toy', price: 30, _id: uuidv4()},
    {name: 'hat', type: 'clothing', price: 15, _id: uuidv4()},
    {name: 'pasta', type: 'food', price: 10, _id: uuidv4()},
    {name: 'baseball', type: 'toy', price: 33, _id: uuidv4()},
    {name: 'lemons', type: 'food', specific: "fruit", price: 8, _id: uuidv4()},
];

ThingFinderRouter
    .get('/', (req, res) => {
        res.send(items);
    })

    .get('/:food', (req, res) => {
        const food = req.params.food;
        res.send(items.filter(item => item.type === food));
    })

    .get('/:clothing', (req, res) => {
        const clothing = req.params.clothing;
        res.send(items.filter(item => item.type === clothing));
    })

    .get('/:toy', (req, res) => {
        const toy = req.params.toy;
        res.send(items.filter(item => item.type === toy))
    })

    .get('/food/type', (req, res) => {
        const fruit = req.query.type;
        const filteredItems = items.filter(item => item.specific === fruit);
        res.send(filteredItems);
    })

    /*
    
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
    */

module.exports = ThingFinderRouter;