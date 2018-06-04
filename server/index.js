const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { Users } = require('./helpers/UsersClass');
const massive = require('massive');

require('dotenv').config();


massive(process.env.CONNECTION_STRING).then(db => {
    console.log('database connected')
    app.set('db', db)
})

const session = require('express-session')({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
})

const sharedSession = require('express-socket.io-session');
app.use(session);

io.use(sharedSession(session, {
    autoSave:true
}));

const routeGroup = require('./Routes/routeGroup');
const routeUser = require('./Routes/routeUser')

app.use(bodyParser.json());

app.use('/group', routeGroup);

app.use('/user', routeUser);

require('./Socket/socketGroup')(io, Users);


app.use(express.static(`${__dirname}/../build`) );


app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

const port = 3500;
server.listen(port, () => console.log(`server listening on port ${port}`));