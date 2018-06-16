import React, { Component } from 'react';
import ChatDisplay from './ChatDisplay';

export default class ChatContainer extends Component {
    render() {
        return (
            <div className='chat-container'>
                <ChatDisplay />
            </div>
        );
    }
}