import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';
import Persistance from '../../Persistance';
import socketIOClient from 'socket.io-client';
import Footer from '../shared/Footer'
import axios from 'axios';

const socket = socketIOClient();

class ChatContainer extends Component {
    constructor(){
        super()
        this.state = {
            createRoomName: '',
            user: '',
            opened: false,
            groupRooms:null,
            modalName: '',
            popularRooms: []
        }

        socket.on('user_room_count', (roomsAndUserCount) => {
            console.log(roomsAndUserCount);
            this.setState({
                popularRooms: roomsAndUserCount
            })
        })
    }

    componentDidMount(){
        axios.get('/api/get_rooms').then(response => {
            this.setState({
                groupRooms: response.data
            })
        })
    }

    reausableChangeHandler = (key, val) => {
        this.setState({
                [key]: val
        })
    }

    changeHandler = (key, val) => {
        this.setState({
                [key]: val
            })
        this.search(val);
    }

    search = (val) => {
        axios.get(`/api/get_room_search?search=${val}`).then(response => {
            this.setState({
                groupRooms: response.data
            })
        })
    }

    toggle = (name) => {
        this.setState((prevState) => {
            return {
                opened: !prevState.opened,
                modalName: name
            }
        })
    }

    render() {
        return (
            <div>
                <div className='chat-container'>
                    <ChatDisplay {...this.props} reausableChangeHandler={this.reausableChangeHandler} createRoomName={this.state.createRoomName} modalName={this.state.modalName} opened={this.state.opened} toggle={this.toggle} search={this.search} changeHandler={this.changeHandler} groupRooms={this.state.groupRooms} popularRooms={this.state.popularRooms} />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Persistance(ChatContainer);