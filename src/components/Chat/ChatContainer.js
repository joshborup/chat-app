import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';
import Persistance from '../../Persistance';

class ChatContainer extends Component {
    constructor(){
        super()
        this.state = {
            user: '',
            groupRooms:[{name:'BoardGames', users: 70}, {name:'Gaming', users: 70}, {name:'Sports', users: 70}, {name:'Astronomy', users: 70}],
            popularRooms: [{name:'NBAfinals', users: 70}, {name:'ASUfootball', users: 70}, {name:'Politics', users: 70}, {name:'JavaScript', users: 70}]
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className='chat-container'>
                <ChatDisplay groupRooms={this.state.groupRooms} popularRooms={this.state.popularRooms} />
            </div>
        );
    }
}

export default Persistance(ChatContainer);