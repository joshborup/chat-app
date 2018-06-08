const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const {test} = require('./Routes/function');
const { Users } = require('./helpers/UsersClass');
const massive = require('massive');
const exec = require('child_process').exec;
const xhub = require('express-x-hub');

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




//used for github webhook to run git pull and npm run build
app.use(xhub({ algorithm: 'sha1', secret: process.env.SECRET_TOKEN}));
console.log(process.env.SECRET_TOKEN);
app.post('/chatit_hook', (req, res) => {
  
    console.log(req.isXHub && req.isXHubValid())
    
    if(req.isXHub && req.isXHubValid()){
      exec('./pull_and_build.sh', (err, stdout, stderr)=> {
          if(err){
              console.log(err)
          }else{
              console.log(stdout)
          }
      })
      console.log('success');
      res.json({ success: 'X-Hub Is Valid' });  
    } else {
      console.log('failed')
      res.status(400).json({ error: 'X-Hub Is Invalid' });
    }     
})

const port = 4001;
server.listen(port, () => console.log(`server listening on port ${port}`));