import React from 'react';
import corner from '../shared/media/Asset 3.svg'

const Message = (props) => {

    let stylingForSelf = props.self ? 'message-name-date myself' : 'message-name-date'
    
    

    return (
        <div className='individual-message-container'>
            <div className='user-image-container-for-messages'>
                <img src={props.picture} />
            </div>
            <div className={stylingForSelf}>
                <div className='corner'></div>
                <div className='message-text'>
                    <p>{props.message}</p>
                </div>
                <div className='name-date'>
                    <p>{props.name}</p>
                    <p>{props.timestamp}</p>
                </div>
            </div>
        </div>
    );
};

export default Message;