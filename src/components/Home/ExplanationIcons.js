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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                </div>

               <div>
                    <div className='icon-container'>
                        <img src={privateChat}/>
                    </div>
                    <h2>Private Chat</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                </div>

                <div>
                    <div className='icon-container'>
                        <img src={randomChat}/>
                    </div>
                    <h2>Random Chat</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                </div>
            </div>
    );
};

export default ExplanationIcon;