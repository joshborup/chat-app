import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';
import Persistance from '../../Persistance';

class ChatContainer extends Component {
    constructor(){
        super()
        this.state = {
            user: ''
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className='chat-container'>
                <ChatDisplay />
            </div>
        );
    }
}

export default Persistance(ChatContainer);