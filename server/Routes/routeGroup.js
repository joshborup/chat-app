const express = require('express');
const path = require('path');
const groupRouter = express.Router();
const app = express();



groupRouter.get('/*', function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'../../build/'));
});

groupRouter.get('/:room', (req, res) => {
    console.log(__dirname)
    const {room} = req.params;
    res.status(200).end();
})

module.exports = groupRouter;