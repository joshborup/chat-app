const express = require('express');
const chatApi = express.Router();


chatApi.get('/get_rooms', (req, res)=>{
    let db = req.app.get('db');
    db.get_rooms().then((rooms)=> {
        res.status(200).json(rooms);
    })
})

chatApi.get('/get_room_search', (req, res)=>{
    let db = req.app.get('db');
    let { search } = req.query;
    console.log('query', search);
    db.get_room_search(search).then((rooms)=> {
        res.status(200).json(rooms);
    })
})


module.exports = chatApi;