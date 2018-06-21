import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';
import Persistance from '../../Persistance';
import axios from 'axios';

class ChatContainer extends Component {
    constructor(){
        super()
        this.state = {
            createRoomName: '',
            user: '',
            opened: false,
            groupRooms:null,
            modalName: '',
            popularRooms: [{name:'NBAfinals', users: 70}, {name:'ASUfootball', users: 70}, {name:'Politics', users: 70}, {name:'TOP_SHELF', users: 70}]
        }
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
            <div className='chat-container'>
                <ChatDisplay {...this.props} reausableChangeHandler={this.reausableChangeHandler} createRoomName={this.state.createRoomName} modalName={this.state.modalName} opened={this.state.opened} toggle={this.toggle} search={this.search} changeHandler={this.changeHandler} groupRooms={this.state.groupRooms} popularRooms={this.state.popularRooms} />
            </div>
        );
    }
}

export default Persistance(ChatContainer);