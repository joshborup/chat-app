import React from 'react';
import groupChat from './media/groupchat.svg';

const HomeDisplay = (props) => {
    return (
        <div className='home-display-container'>
            <div className='banner'>
                <h1>Get Hangin</h1>
            </div>
            <div className='explanation-icons'>
                <div className='icon-container'>
                    <img src={groupChat}/>
                </div>

               <div className='icon-container'>
                    <img src={groupChat}/>
                </div>

                <div className='icon-container'>
                    <img src={groupChat}/>
                </div>
            </div>
        </div>
    );
};

export default HomeDisplay;<div>
                </div>