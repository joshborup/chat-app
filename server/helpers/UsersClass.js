class Users {
    constructor() {
        this.users = [];
    }

    async AddUserData(id, name, picture, room, color){
        let users = {id, name, picture, room, color}
        console.log('innneer', users);
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

        return namesArray;
    }

}

module.exports = {Users}