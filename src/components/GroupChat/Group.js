import React, { Component } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import UsersList from './UsersList';
import MessageContainer from './MessageContainer';
import './group.css';
let socketOrigin = window.location.origin.split(':30')[0];
const socket = socketIOClient(`${socketOrigin}:3500`);

export default class Group extends Component {
    constructor(props){
        super(props)
        this.state = {
          baseURL: window.location.href.split('/').pop(),
          message: '',
          messages:[],
          name:'',
          username: '',
          userslist:[],
          user:''
        }
        this.bottomScroll = React.createRef();

        socket.on('connect', () => {
            let connectionObj={
                room: this.state.baseURL
            }
          socket.emit('room', connectionObj);
        });

        socket.on('message', (message)=>{
            let messages = [...this.state.messages, message]
            this.setState({
                messages: messages
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

    send = () => {
        let time = new Date();
        let timestamp = time.toLocaleTimeString('en-US')
        
        let messageObj = {
            message: this.state.message,
            room: this.props.match.params.room,
            name: this.state.user.nickname,
            picture: this.state.user.picture,
            timestamp: timestamp
        }

        socket.emit("message", messageObj) 
            this.setState({
              message: ''
            })
      }
    
      sendOnEnter = (e) => {
        let time = new Date();
        let timestamp = time.toLocaleTimeString('en-US')
        
        let messageObj = {
            message: this.state.message,
            room: this.props.match.params.room,
            name: this.state.user.nickname,
            picture: this.state.user.picture,
            timestamp: timestamp
        }

        if(e.key == 'Enter'){

        socket.emit("message", messageObj) 
            this.setState({
                message: ''
            })
        }
      }


    render() {

        console.log(this.state.messages);

        return (
            
            <div className='group-chatroom-container'>
                {
                    this.state.user ?
                <div> 
                    
                    <UsersList usersList={this.state.userslist} csvData={this.state.messages} />
                    <MessageContainer username={this.state.username} enter={this.sendOnEnter} className='scroller' messages={this.state.messages} changeHandler={this.changeHandler} message={this.state.message} submitMessage={this.send}/>
                    
                </div>
                :
                'login to chat'
                }
            </div>
        
        );
    }
}