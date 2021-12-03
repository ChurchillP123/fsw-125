const express = require('express');
const app = express();
const port = 3000;

let collection = [
    {name: "Earth", age: "old", color: "blue"},
    {name: "Perry", age: 23, color: "black"},
    {name: "Friend", age: 13, color: "orange"}
];

app.get('/world', function(req, res) {
    res.send(collection[0])
});

app.get('/perry', function(req, res){
    res.send(collection[1])
});

app.get('/friend', function(req, res){
    res.send(collection[2])
})

app.listen(port, function(){
    console.log(`Listening on port ${port}...`)
});
