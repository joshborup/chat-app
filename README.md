# Chat App built with react, express, sockets


## notes

### 1.) sockets
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

### 2.) setState with function

<a href='https://tylermcginnis.com/react-interview-questions/'>Reference (last question)</a>

<a href="https://twitter.com/dan_abramov/status/816394376817635329/photo/1?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fmedium.com%2Fmedia%2Fd8a8ce2953f25b98611b1bea4f7600b6%3FpostId%3D1f5cfd6e55d">Tweet confirmed by Dan Abramov</a>

If setting state based off of previous state such as a `true/false` toggle, you need to pass a callback to `setState()` with the `prevState` as an argument:

<p style='color:rgb(50,255,50)'>Correct<p>

```javascript
Toggle = () => {
    this.setState((prevState) => {
        return {
            toggle: !prevState.toggle
        }
    })
}
```
<p style='color:rgb(255,50,50)'>Wrong</p>

```javascript
Toggle = () => {
    this.setState({
        toggle: !this.state.toggle
    })
}
```


# UX/UI checklist:

* does chat data persist on refresh/window close (utilize local storage)
* does database data have a fallback loading gif to be displayed while fetching data