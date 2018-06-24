import React from 'react';
import corner from '../shared/media/Asset 3.svg'

const Message = (props) => {

    let stylingForSelf = props.self ? 'individual-message-container myself' : 'individual-message-container guest';
    
    

    return (
        <div className={stylingForSelf}>
            
            <div className='message-name-date'>
                <div className='user-image-container-for-messages corner'>
                    <img src={props.picture} />
                </div>
                <div className='name-date'>
                    <div>
                        <p className='name-text'>{props.name}</p>
                        <p className='time-text'>{props.timestamp}</p>
                    </div>
                    
                    <div>
                        <p className='message-text'>{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;