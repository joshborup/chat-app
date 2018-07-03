module.exports = (io, Users) => {   
    const users = new Users();

    let randomRoomsPairs = []
    
    io.sockets.on('connection', (socket) => {
        
        
        socket.on('room', (connectionObj) => {
            if(socket.handshake.session.user){

                
                
                

                switch(connectionObj.type) {
                    case 'group':
                        users.AddUserData(socket.handshake.session.user[0].id, socket.id, socket.handshake.session.user[0].name, socket.handshake.session.user[0].picture, connectionObj.room, connectionObj.type);
                        socket.join(connectionObj.room);
                        break;
                    case 'private':
                        users.AddUserData(socket.handshake.session.user[0].id, socket.id, socket.handshake.session.user[0].name, socket.handshake.session.user[0].picture, connectionObj.room, connectionObj.type);

                        socket.join(connectionObj.room);
                        break;
                    case 'random':
                        let availableRooms = users.GetRandomRoomsAndUserCount().filter(room => room.users < 2);
                        if(availableRooms.length){
                            console.log(availableRooms[0].name)
                            
                            connectionObj.room = availableRooms[0].name;
                            
                            socket.join(availableRooms[0].name);
                            io.emit('random', availableRooms[0].name);
                            let userslist = users.GetRandomUserList(availableRooms[0].name, randomRoomsPairs)
                            
                            io.in(availableRooms[0].name).emit('users_list', userslist)
                        }else{
                            socket.join(connectionObj.room)
                        }
                        break;
                    default:
                        console.log('default')
                } 
                users.AddUserData(socket.handshake.session.user[0].id, socket.id, socket.handshake.session.user[0].name, socket.handshake.session.user[0].picture, connectionObj.room, connectionObj.type);
            }
            
            let userslist = users.GetUserList(connectionObj.room)
            let groupRooms = users.GetRoomsAndUserCount().filter(rooms => rooms.type != 'private' && rooms.type != 'random')

            io.emit('user_room_count', groupRooms)
            io.in(connectionObj.room).emit('users_list', userslist)
        });

        socket.on('get_users', (filler) => {

            let groupRooms = users.GetRoomsAndUserCount().filter(rooms => rooms.type != 'private' && rooms.type != 'random')
            io.emit('user_room_count', groupRooms)
        })

        socket.on('message', (messageObj)=> {
            messageObj.color = socket.handshake.session.user.color;
            io.in(messageObj.room).emit('message', messageObj)
        })

        socket.on('left', (left)=> {
            let room = users.RemoveUser(socket.id)
            let userslist = users.GetUserList(room)
            let groupRooms = users.GetRoomsAndUserCount().filter(rooms => rooms.type != 'private' && rooms.type != 'random')
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