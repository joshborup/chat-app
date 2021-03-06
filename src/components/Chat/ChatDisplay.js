import React from 'react';
import './chat.css';
import {Link} from 'react-router-dom';
import Modal from '../Chat/Modal';
import generateName from 'sillyname';
import search from './media/magnifying-glass-1976105.svg'
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
        return <div key={room.room_name} className='room-list'>
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
        return <div key={room.name} className='room-list'>
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
                <div>
                    <button onClick={() => props.toggle('Create Room')}>
                        Create Room
                    </button>
                </div>
                <div>
                    <Link to={`/chat/group/${generateName().split(' ').join('')}`}>
                        <button>
                            Quick Chat
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={`/chat/random/${generateName().split(' ').join('')}`}>
                        <button>
                            Random Chat
                        </button>
                    </Link>
                </div>
            </div>

           <div className='rooms'>
               <div className='group'>
                    <h2>
                        General
                    </h2>
                    <div>
                        <img className='search-icon' src={search} alt='search-icon'/>
                        <input name='search' onChange={(e) => props.changeHandler(e.target.name, e.target.value)} placeholder='Search Rooms ...' className='search' type='text' name='search' />
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

