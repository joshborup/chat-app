import React, { Component } from 'react';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import UsersList from './UsersLists';
import MessageContainer from './MessageContainer';
import myColors from '../styles/colors';
import './group.css';

const socket = socketIOClient();

export default class Group extends Component {
    constructor(props){
        super(props)

        this.state = {
          baseURL: this.props.match.params.room,
          message: '',
          messages:[],
          name:'',
          snackBarOpen: false,
          justJoined:'',
          userslist:[],
          user: {
              name:''
          }
        }

        this.bottomScroll = React.createRef();

        let connectionObj={
            room: this.state.baseURL,
            color: myColors()
        }
        
        socket.emit('room', connectionObj);
        

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
            if(this.state.userslist.length < userslist.length){
                console.log('userslist', userslist)
                console.log('state userslist', this.state.userslist)
                let listCopy = userslist.slice()
                let newJoin = listCopy.pop().name
                this.setState({
                    userslist: userslist,
                    snackBarOpen: true,
                    justJoined: newJoin
                })
                setTimeout(()=> {
                    this.setState({ 
                        snackBarOpen: false
                    });
                }, 2000)
            } else{
                this.setState({
                    userslist: userslist
                })
            }
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

    componentWillUnmount(){
        socket.emit('left', {message: 'just left'})
    }

    snackBarClose = () => {
        this.setState({ 
            open: false 
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
        console.log(this.props.match.params.room)
        return (
            
            <div className='group-chatroom-container'>
                {
                    this.state.user
                    ?
                    <div> 
                        <UsersList justJoined={this.state.justJoined} snackBarClose={this.snackBarClose} snackBarOpen={this.state.snackBarOpen} usersList={this.state.userslist} csvData={this.state.messages} />
                        <MessageContainer name={this.state.user.name}  enter={this.sendOnEnter} className='scroller' messages={this.state.messages} changeHandler={this.changeHandler} message={this.state.message} submitMessage={this.send}/>
                    </div>
                    :
                    'login to chat'
                }
            </div>
        
        );
    }
}