import React, { Component } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
let socketOrigin = window.location.origin.split(':30')[0]
const socket = socketIOClient(`${socketOrigin}:3500`);

export default class Group extends Component {
    constructor(props){
        super(props)
        this.state = {
          baseURL: window.location.href.split('/').pop(),
          message: '',
          incomingMessage:'',
          name:'',
          username: '',
          userslist:'',
          user:''
        }
        
        socket.on('connect', () => {
            let connectionObj={
                room: this.state.baseURL
            }
          socket.emit('room', connectionObj);
        });

        socket.on('message', (incomingMessage)=>{
            this.setState({
                incomingMessage: incomingMessage
            })
        })

        socket.on('users_list', (userslist)=> {
            this.setState({
                userslist: userslist
            })
        })
        
    }

    componentDidMount(){
        axios.get('/user/user_data').then(response => {
            this.setState({
                user: response.data
            })
        })
    }

    changeHandler = (key, value) => {
            this.setState({
                [key]:value
            })
    }
        
    submitMessage = () => {
        let messageObj = {
            message: this.state.message,
            room: this.props.match.params.room,
            name: this.state.user.nickname
        }

        socket.emit('message', messageObj);
    }

    render() {
        return (
            
            <div>
                {
                    this.state.user ?
                <div>
                    <div>
                        {this.state.userslist}
                    </div>
                    
                    <div>
                        {this.state.incomingMessage}
                        message<input name='message' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.message} />
                        <button onClick={this.submitMessage}>submit</button>
                    </div>
                </div>
                :
                'login to chat'
                }
            </div>
        
        );
    }
}