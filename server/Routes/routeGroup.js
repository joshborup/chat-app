const express = require('express');
const groupRouter = express.Router();




groupRouter.get('/:room', (req, res) => {
    const {room} = req.params;
    res.status(200).send(`${room} route awww yeah!`);
})

module.exports = groupRouter;