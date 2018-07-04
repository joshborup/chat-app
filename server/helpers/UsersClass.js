class Users {
    constructor() {
        this.users = [];
    }

   AddUserData(id, socket_id, name, picture, room, type){
        let user = {id, socket_id, name, picture, room, type}
        let index = this.GetRoomsAndUserCount().findIndex(elem => elem.name == room)
        if(index != -1){
            if(this.GetRoomsAndUserCount()[index].type != type){
                
                user.type = this.GetRoomsAndUserCount()[index].type
                
            }

        }
        if (JSON.stringify(this.users).includes(`${id}`) && JSON.stringify(this.users).includes(`${name}`)){
            return 
        }else {
            this.users.push(user)
            return user;
        }
    }

    RemoveUser(socket_id){

        let indexOfuserToRemove = this.users.findIndex((user) => user.socket_id == socket_id);
        if(indexOfuserToRemove !== -1){
            let room = this.users[indexOfuserToRemove].room
            this.users.splice(indexOfuserToRemove, 1);
            return room;
        }
    }

    GetUserList(room){
        let users = this.users.filter(user => user.room === room);

        let namesArray = users.map(user => {
            return user;
        })

        let list = {
            names: namesArray,
            count: namesArray.length
        }
        return list;
    }


    GetRandomUserList(room, array){
        let users = array.filter(user => user.room === room);

        let namesArray = users.map(user => {
            return user;
        })

        let list = {
            names: namesArray,
            count: namesArray.length
        }
        return list;
    }

    GetRoomCount(room){
        let userCount = [] 
        users.filter(e => {
            if(e.room == room){
                userCount.push(room)
            }
        })
        return userCount.length
    }

    GetRoomsAndUserCount(){
    
        let roomsArray = []
        for(let i = 0; i < this.users.length; i++){
            if(!roomsArray.includes(this.users[i].room)){
                roomsArray.push(this.users[i])
            }
        }
        let roomsAndCount = roomsArray.map(room => {
            let count = this.users.filter((user)=> user.room == room.room)
            return {
                name: room.room,
                users: count.length,
                type: room.type
            }
        })

        roomsAndCount.sort((a,b) => b.count - a.count) 
        return roomsAndCount;
    }

    GetRandomRoomsAndUserCount(){
    
        let roomsArray = []
        for(let i = 0; i < this.users.length; i++){
            if(!roomsArray.includes(this.users[i].room)){
                roomsArray.push(this.users[i])
            }
        }
        let roomsAndCount = roomsArray.map(room => {
            let count = this.users.filter((user)=> user.room == room.room)
            return {
                name: room.room,
                users: count.length,
                type: room.type
            }
        })

        roomsAndCount.sort((a,b) => b.count - a.count)
        return roomsAndCount;
    }

}

module.exports = {Users}