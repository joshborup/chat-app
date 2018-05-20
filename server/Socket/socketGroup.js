module.exports = (io, Users) => 
{   
    const users = new Users();

    io.sockets.on('connection', (socket) => {
    console.log('client connected')
    
    socket.on('room', (connectionObj) => {
        console.log(connectionObj)
        if(socket.handshake.session.user){
            users.AddUserData(socket.id, socket.handshake.session.user.nickname, connectionObj.room);
            console.log('passed', socket.handshake.session.user);
        
        
        socket.join(connectionObj.room);
        }
        
        let userslist = users.GetUserList(connectionObj.room)
        io.in(connectionObj.room).emit('users_list', userslist)
      });

    socket.on('message', (messageObj)=> {
        

        io.in(messageObj.room).emit('message', messageObj.message)
    })

    socket.on('disconnect', () => {
        let room = users.RemoveUser(socket.id)
        let userslist = users.GetUserList(room)
        io.in(room).emit('users_list', userslist)
        
    })
})}