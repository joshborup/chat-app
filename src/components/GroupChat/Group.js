import React, { Component } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import UsersList from './UsersList';
import MessageContainer from './MessageContainer';
import myColors from '../styles/colors';
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
          userslist:[],
          user: {
              name:''
          }
        }

        this.bottomScroll = React.createRef();

        socket.on('connect', () => {
            let connectionObj={
                room: this.state.baseURL,
                color: myColors()
            }
            socket.emit('room', connectionObj);
        });

        socket.on('message', (message)=>{
            console.log(message)
            let messages;
            if(message.message){
                messages = [...this.state.messages, message]
            }else {

                messages = [...this.state.messages]
            }

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
            console.log(response)
            this.setState({
                user: response.data[0]
            })
        })
    }

    changeHandler = (key, value) => {
        this.setState({
            [key]:value
        })
    }

    send = () => {
        let time = new Date();
        let timestamp = time.toLocaleTimeString('en-US')
        
        let messageObj = {
            message: this.state.message,
            room: this.props.match.params.room,
            name: this.state.user.name,
            picture: this.state.user.picture,
            timestamp: timestamp
        }

        if(this.state.message){
            socket.emit("message", messageObj) 
            this.setState({
            message: ''
            })
        }
    }
    
    sendOnEnter = (e) => {
        let time = new Date();
        let timestamp = time.toLocaleTimeString('en-US')
        
        let messageObj = {
            message: this.state.message,
            room: this.props.match.params.room,
            name: this.state.user.name,
            picture: this.state.user.picture,
            timestamp: timestamp
        }

        if(e.key == 'Enter'  && this.state.message){
            socket.emit("message", messageObj) 
            this.setState({
                message: ''
            }) 
        }
    }


    render() {

        
        return (
            
            <div className='group-chatroom-container'>
                {
                    this.state.user
                    ?
                    <div> 
                        <UsersList usersList={this.state.userslist} csvData={this.state.messages} />
                        <MessageContainer name={this.state.user.name}  enter={this.sendOnEnter} className='scroller' messages={this.state.messages} changeHandler={this.changeHandler} message={this.state.message} submitMessage={this.send}/>
                    </div>
                    :
                    'login to chat'
                }
            </div>
        
        );
    }
}