import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './media/jumping_banano.json';
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

    const style = {
        height:'150px',
        width: '150px'
    }

    return (
        <div className='footer-container'>
            <div className='footer-content'>
                    <Lottie style={style} options={defaultOptions}
                    height={450}
                    width={'120%'}
                    />
                <p>Get Chatin...</p>
            </div>
        </div>
    );
};

export default Footer;