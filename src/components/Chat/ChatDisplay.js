import React from 'react';
import './chat.css';
import {Link} from 'react-router-dom';

const ChatDisplay = (props) => {

    let groupRooms = props.groupRooms.map((room)=>{
        return <div>
                    {room.name}
                    {room.users}
                </div>

    })

    let popularRooms = props.popularRooms.map((room)=>{
        return <div>
                    {room.name}
                    {room.users}
                </div>

    })

    return (
        <div className='chat-display'>
           <h1>Select a room</h1>

            <div className='create-room'>
                <button>
                    Create Room
                </button>
                <button>
                    Random Room
                </button>
            </div>

           <div className='rooms'>
               <div className='group'>
                    <h2>
                        General
                    </h2>
                    {groupRooms}
                </div>

                <div className='random'>
                    <h2>
                        Popular
                    </h2>
                    {popularRooms}
                    <Link to='/chat/group/Science'>
                    Science
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChatDisplay;