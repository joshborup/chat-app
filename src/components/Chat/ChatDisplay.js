import React from 'react';
import './chat.css';

const ChatDisplay = (props) => {
    return (
        <div className='chat-display'>
           <h1>Select a room</h1>

            <div className='create-room'>
                <button>
                    create room
                </button>
            </div>

           <div className='rooms'>
               <div className='group'>
                    <h2>
                        Group
                    </h2>
                </div>

                <div className='random'>
                    <h2>
                        Random
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ChatDisplay;