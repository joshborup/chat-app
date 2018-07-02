import React from 'react';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    console.log('props :', props);
    return (
        <div className='chat-modal-container'>
        <div onClick={() => props.toggle('Create Room')} className='modal-background'></div>
            <div className='chat-modal'>
                <h2>{props.modalName}</h2>
                <div className='room-type-info'>
                    Room Name:
                    <input onKeyPress={(e) => e.key == "Enter" ? props.history.push(`/chat/${props.roomType}/${props.createRoomName}`) : ''} name='createRoomName' type='text' onChange={(e) => props.reausableChangeHandler(e.target.name, e.target.value)} ref={(input) => {
        if (input != null) {
          input.focus();
        }
      }} />
                </div>
                <div className='private-container'>
                    Private:
                    <div class="roundedTwo">
                        <input id="roundedTwo" name="check" onChange={props.privateRoom} type='checkbox' checked={props.private} />
                        <label for="roundedTwo"></label>
                    </div>
                    {/* <input onChange={props.privateRoom} type='checkbox' checked={props.private}/> */}
                    <span className="private-details">(wont be listed or searchable)</span>
                </div>
                <div className='mybuttons'>
                
                <Link to={`/chat/${props.roomType}/${props.createRoomName}`}><button>Create</button></Link>
                    <button onClick={() => props.toggle('Create Room')}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

