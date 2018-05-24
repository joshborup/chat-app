import React from 'react';
import corner from '../shared/media/Asset 3.svg'

const Message = (props) => {

    let stylingForSelf = props.self ? 'individual-message-container myself' : 'individual-message-container guest';
    
    

    return (
        <div className={stylingForSelf}>
            <div className='user-image-container-for-messages'>
                <img src={props.picture} />
            </div>
            <div className='message-name-date'>
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