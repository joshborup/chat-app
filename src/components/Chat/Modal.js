import React from 'react';

const Modal = (props) => {
    return (
        <div className='chat-modal-container'>
        <div onClick={() => props.toggle('Create Room')} className='modal-background'></div>
            <div className='chat-modal'>
                <h2>{props.modalName}</h2>
                <div className='room-type-info'>
                    Room Name:
                    <input name='name' type='text' />
                </div>
            </div>
        </div>
    );
};

export default Modal;