class Users {
    constructor() {
        this.users = [];
    }

    AddUserData(id, name, picture, room){
        let users = {id, name, picture, room}
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