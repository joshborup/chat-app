import React, { Component } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import UsersLists from './UsersLists';
import MessageContainer from './MessageContainer';

import './room.css';

const socket = socketIOClient();

export default class Group extends Component {
    constructor(props){
        super(props)

        this.state = {
          baseURL: this.props.match.params.room,
          private: this.props.match.params.type,
          count: null,
          message: '',
          messages:[],
          name:'',
          open: false,
          justJoined:'',
          userslist:[],
          user: {
              name:''
          }
        }
        console.log('this.props.match.query:', this.props.match);
        this.bottomScroll = React.createRef();
        
        let connectionObj={
            room: this.props.match.params.room,
            type: this.props.match.params.type
        }
        
        socket.emit('room', connectionObj);

        socket.on('random', (roomName) => {
            this.setState({
                baseURL: roomName
            });
        })

        socket.on('message', (message)=>{
           
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
                console.log(userslist)
                this.setState({
                    userslist: userslist.names,
                    count: userslist.count
                })
        })
        
    }

    componentDidMount(){
        axios.get('/user/user_data').then(response => {
           
            this.setState({
                user: response.data[0]
            })
        })
        let storedData = localStorage.getItem(`messages-${this.props.match.params.room}`);
        if(storedData){
            let convertedJSON = JSON.parse(storedData);
            this.setState({
                messages: convertedJSON
            })
        }
    }

    componentWillUnmount(){
        socket.emit('left', {message: 'just left'})
        localStorage.setItem(`messages-${this.props.match.params.room}`, JSON.stringify(this.state.messages));
    }

    drawerToggle = () => {
        this.setState(prevState => { 
            return {
                open: !prevState.open 
            }  
        });
    };

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
            room: this.state.baseURL,
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
            room: this.state.baseURL,
            name: this.state.user.name,
            picture: this.state.user.picture,
            timestamp: timestamp
        }

        if( e.key == 'Enter'  && this.state.message ){
            socket.emit("message", messageObj) 
            this.setState({
                message: ''
            }) 
        }
    }


    render() {
       
        let opaque = this.state.open ? 'opaque-background show' : 'opaque-background hide';
        
        return (
            
            <div className='group-chatroom-container'>
                {
                    this.state.user
                    ?
                    <div> 
                        <UsersLists room={this.state.baseURL} count={this.state.count} open={this.state.open} usersList={this.state.userslist} drawerToggle={this.drawerToggle} />
                        <div onClick={this.drawerToggle} className={opaque}></div>
                        <MessageContainer name={this.state.user.name}  enter={this.sendOnEnter} className='scroller' messages={this.state.messages} changeHandler={this.changeHandler} message={this.state.message} submitMessage={this.send}/>
                    </div>
                    :
                    'login to chat'
                }
            </div>
        
        );
    }
}