class Users {
    constructor() {
        this.users = [];
    }

    async AddUserData(id, name, picture, room, color){
        let users = {id, name, picture, room, color}
        this.users.push(users)
        return users;
    }

    RemoveUser(id){

        let indexOfuserToRemove = this.users.findIndex((user) => user.id == id);
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

    GetRoomCount(room){
        let userCount = [] 
        users.filter(e => {
            if(e.room == room){
                userCount.push(room)
            }
        })
        return userCount.length
    }

}

module.exports = {Users}