import React from 'react';

const Modal = (props) => {
    return (
        <div className='chat-modal-container'>
            <div className='chat-modal'>
                test
                {`${props.opened}`}
            </div>
        </div>
    );
};

export default Modal;