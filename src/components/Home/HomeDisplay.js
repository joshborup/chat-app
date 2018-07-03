import React from 'react';
import ExplanationIcons from './ExplanationIcons';
import * as animationData from './media/flow.json';
import Login from '../shared/Login/Login';
import Lottie from 'react-lottie';

const HomeDisplay = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      const style = {
        position: "absolute",
        background:"#49273e54",
        left: '-50px',
        top: '-50px',
        zIndex: 0
    }
    return (
        <div className='home-display-container'>
            <div className='banner'>
                <div>
                    <Lottie style={style} options={defaultOptions}
                    height={450}
                    width={'120%'}
                    />
                </div>
                <h1>Get Hangin!</h1>
                <h2>Chat the way you want</h2>
                <div className='home-login'>
                    <Login label='Sign Up' />
                </div>
            </div>
            <ExplanationIcons />
        </div>
    );
};

export default HomeDisplay;