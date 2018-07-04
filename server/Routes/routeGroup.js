const express = require('express');
const path = require('path');
const { test } = require('./function')
const groupRouter = express.Router();


groupRouter.get('/*', test)


groupRouter.get('/:room', (req, res) => {
    const {room} = req.params;
    res.status(200).end();
})

module.exports = groupRouter;