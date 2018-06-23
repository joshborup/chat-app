import React from 'react';
import loader from '../shared/Login/loader.gif';
import Upload from '../shared/Upload';

const ProfileDisplay = (props) => {

    console.log('props :', props.toggle.data);
    let userImage = props.user.picture ? props.user.picture : loader;

    return (
        <div className='profile-display-container'>
            <div className='custom-banner'>
                <div className='custom-banner-image'>
                    {props.profileBackground ? <img src={props.profileBackground}/> : <img src={props.user.profile_background}/>}
                </div>
                <div className='profile-image-container'>
                    <img src={userImage} alt='user image provided by auth0 or social provider'/>
                </div>
                <div className='user-name'> 
                    <h1>{props.user.name}</h1>
                </div>
                <Upload className='background-upload-form' uploadedImage={props.uploadedImage} />

            </div>
            <div className='profile-info'>
                <div>
                    Email: {props.user.email}
                </div>

                <div className='about-me'>
                    <label for='aboutMe'>About me: </label>
                    <textarea disabled={props.toggle.data} id='aboutMe' name='aboutMe' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.aboutMe}/>
                </div>

                <div className='facebook'> 
                    <label for='facebook'>https://www.facebook.com/</label>
                    <input placeholder='username' disabled={props.toggle.data} id='facebook' name='facebook' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.facebook}/>
                </div>

                <div className='instagram'> 
                    <label for='instagram'>https://www.instagram.com/</label>
                    <input placeholder='username' disabled={props.toggle.data} id='instagram' name='instagram' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.instagram}/>
                </div>

                <div className='linkedin'> 
                    <label for='linkedin'>https://www.linkedin.com/in/</label>
                    <input placeholder='username' disabled={props.toggle.data} id='linkedin' name='linkedin' onChange={(e)=> props.changeHandler(e.target.name, e.target.value)} value={props.linkedin}/>
                </div>
                {props.toggle.data ? <button className='edit-button' onClick={() => props.toggle.func()}>Edit Profile</button> : <button className='save-button' onClick={() => props.update()}>save</button>}
            </div>
        </div>
    );
};

export default ProfileDisplay;