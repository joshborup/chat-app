import React from 'react';
import groupChat from './media/groupchat.svg';
import privateChat from './media/privatechat.svg';
import randomChat from './media/randomchat.svg';

const ExplanationIcon = () => {
    return (
        <div className='explanation-icons'>
                <div>
                    <div className='icon-container'>
                        <img src={groupChat}/>
                    </div>
                    <h2>Group Chat</h2>
                    <p>Organize a group chat with your friends, or join an established room to chat about your favorite subjects.</p>
                </div>

               <div>
                    <div className='icon-container'>
                        <img src={privateChat}/>
                    </div>
                    <h2>Private Chat</h2>
                    <p>Looking for a private place where you can collaborate with a team or friends, you can create private rooms that wont be listed</p>
                </div>

                <div>
                    <div className='icon-container'>
                        <img src={randomChat}/>
                    </div>
                    <h2>Random Chat</h2>
                    <p>We pick one other random user and drop them in the room with you. When you hit the random chat button, you will always have a new experience</p>
                </div>
            </div>
    );
};

export default ExplanationIcon;