import React from 'react';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    return (
        <div className='chat-modal-container'>
        <div onClick={() => props.toggle('Create Room')} className='modal-background'></div>
            <div className='chat-modal'>
                <h2>{props.modalName}</h2>
                <div className='room-type-info'>
                    Room Name:
                    <input name='createRoomName' type='text' onChange={(e) => props.reausableChangeHandler(e.target.name, e.target.value)} />
                </div>
                <div className='mybuttons'>
                <Link to={`/chat/group/${props.createRoomName}`} ><button>Create</button></Link>
                    <button onClick={() => props.toggle('Create Room')}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
