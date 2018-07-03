import React from 'react';
import './chat.css';
import {Link} from 'react-router-dom';
import Modal from '../Chat/Modal';
import generateName from 'sillyname';
import * as animationData from '../shared/media/lego_loader.json'
import Lottie from 'react-lottie';

const ChatDisplay = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    let groupRooms = props.groupRooms ? props.groupRooms.map((room)=>{
        return <div className='room-list'>
                    <div>
                        {room.room_name}
                    </div>
                    <div>
                        <Link to={`/chat/group/${room.room_name}`}>
                            Join
                        </Link>
                    </div>
                </div>
    }) : <div className='loader'><Lottie options={defaultOptions}
    />
    <p>Loading...</p>
    </div>;

    let popularRooms = props.popularRooms.map((room)=>{
        return <div className='room-list'>
                    <div>
                        {room.name} ({room.users})
                    </div>
                    <div>
                        <Link to={`/chat/group/${room.name}`}>
                            Join
                        </Link>
                    </div>
                </div>
    })


    return (
        <div className='chat-display'>
           <h1>Select a room</h1>

            <div className='create-room'>
                <button onClick={() => props.toggle('Create Room')}>
                    Create Room
                </button>
                <Link to={`/chat/group/${generateName().split(' ').join('')}`}>
                    <button>
                        Quick Chat
                    </button>
                </Link>
                <Link to={`/chat/random/${generateName().split(' ').join('')}`}>
                    <button>
                        Random Chat
                    </button>
                </Link>
            </div>

           <div className='rooms'>
               <div className='group'>
                    <h2>
                        General
                    </h2>
                    <div>
                        <input name='search' onChange={(e) => props.changeHandler(e.target.name, e.target.value)} placeholder='Search Rooms' className='search' type='text' name='search' />
                    </div>
                    {groupRooms}
                </div>

                <div className='random'>
                    <h2>
                        Popular
                    </h2>
                    {popularRooms}
                </div>
            </div>
            {props.opened ? 
            <div>
                <Modal {...props} reausableChangeHandler={props.reausableChangeHandler} createRoomName={props.createRoomName} toggle={props.toggle} modalName={props.modalName} />
            </div>
            : null}
        </div>
    );
};

export default ChatDisplay;

