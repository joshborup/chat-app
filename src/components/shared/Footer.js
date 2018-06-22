import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './media/sky.json'
import './footer.css';

const Footer = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className='footer-container'>
            <div>
                <Lottie options={defaultOptions}
                height={400}
                width={'100%'}/>
            </div>
            <div className='footer-content'>
                <h2>Footer</h2>
                <p>Something exciting is coming soon...</p>
            </div>
        </div>
    );
};

export default Footer;