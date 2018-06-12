import React from 'react';
import World from './media/World - 2.mp4';



const HomeDisplay = (props) => {
    return (
        <div className='home-display-container'>
            <video className='home-banner-background-video' autoPlay={true} loop={true}>
                <source src={World} type="video/mp4"/>
            </video>
            <h1>Chatit!</h1>
        </div>
    );
};

export default HomeDisplay;