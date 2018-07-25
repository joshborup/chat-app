import React from 'react';
import facebook from './media/facebook.svg';
import instagram from './media/instagram.svg';
import linkedin from './media/linkedin.svg';

const PubProfileDisplay = (props) => {
    console.log('---------------------',props);
    return (
        <div>
            <div className='custom-banner'>
                <div className='custom-banner-image'>
                    <img src={props.pubUser.profile_background}/> 
                </div>
                <div className='profile-image-container'>
                    <img src={props.pubUser.picture} alt='user image provided by auth0 or social provider'/>
                </div>
                <div className='user-name'> 
                    <h1>{props.pubUser.name}</h1>
                </div>
            </div>
            <div className='pub-profile-content'>
                <div>
                    <h3>About me:</h3>  {props.pubUser.about_me}
                </div>

                <div className='social'>
                    { props.pubUser.facebook ?
                        <div>
                            <a target='_blank' href={`https://www.facebook.com/${props.pubUser.facebook}`}>
                            <img src={facebook}/>
                            </a>
                        </div>
                    :
                        ''}
                    { props.pubUser.instagram ?
                        <div>
                            <a target='_blank' href={`https://www.instagram.com/${props.pubUser.instagram}`}>
                            <img src={instagram}/>
                            </a>
                            
                        </div>
                    :
                        ''}
                        { props.pubUser.linkedin ?
                        <div>
                            <a target='_blank' href={`https://www.linkedin.com/in/${props.pubUser.linkedin}`}>
                            <img src={linkedin}/>
                            </a>
                        </div>
                    :
                        ''}

                </div>
            </div>
        </div>
    );
};

export default PubProfileDisplay;