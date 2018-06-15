import React from 'react';
import ExplanationIcons from './ExplanationIcons';

const HomeDisplay = (props) => {
    return (
        <div className='home-display-container'>
            <div className='banner'>
                <h1>Get Hangin!</h1>
            </div>
            <ExplanationIcons />
        </div>
    );
};

export default HomeDisplay;