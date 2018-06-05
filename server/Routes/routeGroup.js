const express = require('express');
const groupRouter = express.Router();
const app = express();

groupRouter.get('/:room', (req, res) => {
    const {room} = req.params;
    res.status(200).end();
})


app.use( express.static( `${__dirname}../build` ) );

app.get('/*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../build/index.html'));
    })

module.exports = groupRouter;