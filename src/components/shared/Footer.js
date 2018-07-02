import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './media/color.json'
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
        position: "absolute",
        left: "-50px"
    }

    return (
        <div className='footer-container'>
            <div>
                <Lottie style={style} options={defaultOptions}
                height={400}
                width={'110%'}
                />
            </div>
            <div className='footer-content'>
                <h2>Footer</h2>
                <p>Something exciting is coming soon...</p>
            </div>
        </div>
    );
};

export default Footer;