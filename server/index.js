const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const {test} = require('./Routes/function');
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

app.use(express.static(path.join(__dirname, '/../build')));


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

app.get('*', test);

const port = 3500;
server.listen(port, () => console.log(`server listening on port ${port}`));