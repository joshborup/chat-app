# Chat App built with react, express, sockets


## notes

in order to get socket to connect when switching urls using react-router you must use `socket.emit('yourevent', object to send)`, this will launch the right before render runs ensuring a connection is made.

```javascript
export default class Group extends Component {
    constructor(props){
        super(props)
        this.state = {
          baseURL: this.props.match.params.room   
        }

        let connectionObj={
            room: this.state.baseURL
        }
        
        socket.emit('room', connectionObj);
    }
        
```