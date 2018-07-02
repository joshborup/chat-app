module.exports = (io, Users) => {   
    const users = new Users();

    
    io.sockets.on('connection', (socket) => {
        
        
        socket.on('room', (connectionObj) => {
            if(socket.handshake.session.user){
                users.AddUserData(socket.handshake.session.user[0].id, socket.id, socket.handshake.session.user[0].name, socket.handshake.session.user[0].picture, connectionObj.room, connectionObj.type);
                socket.join(connectionObj.room);
            }
            
            let userslist = users.GetUserList(connectionObj.room)
            let groupRooms = users.GetRoomsAndUserCount().filter(rooms => rooms.type != 'private')
            io.emit('user_room_count', groupRooms)
            io.in(connectionObj.room).emit('users_list', userslist)
        });

        socket.on('get_users', (filler) => {

            let groupRooms = users.GetRoomsAndUserCount().filter(rooms => rooms.type != 'private')
            io.emit('user_room_count', groupRooms)
        })

        socket.on('message', (messageObj)=> {
            messageObj.color = socket.handshake.session.user.color;
            io.in(messageObj.room).emit('message', messageObj)
        })

        socket.on('left', (left)=> {
            let room = users.RemoveUser(socket.id)
            let userslist = users.GetUserList(room)
            let groupRooms = users.GetRoomsAndUserCount().filter(rooms => rooms.type != 'private')
            io.emit('user_room_count', groupRooms)
            io.in(room).emit('users_list', userslist)   
        })

        socket.on('disconnect', () => {
            let room = users.RemoveUser(socket.id)
            let userslist = users.GetUserList(room)
            io.in(room).emit('users_list', userslist)    
        })
    })
}