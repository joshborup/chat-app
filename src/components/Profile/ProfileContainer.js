import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import Persistance from '../../Persistance';
import axios from 'axios';
import './profile.css';

class PersonalProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            profileBackground: ''
        }
    }

    uploadedImage = (profileBackground) => {
        
        axios.post('/user/edit_profile_background', {profileBackground: profileBackground}).then(response => {
            let data = sessionStorage.getItem('state');
            let parsedData = JSON.parse(data)
            parsedData.user.profile_background = profileBackground;
            let stringifiedData = JSON.stringify(parsedData)
            sessionStorage.setItem('state', stringifiedData)
            this.setState({
                profileBackground: profileBackground
            })

        })
    }

    render() {
        console.log(this.props.user)
        return (
            <div>
                {this.props.user ? <ProfileDisplay profileBackground={this.state.profileBackground}  uploadedImage={this.uploadedImage} user={this.props.user}/> : 'please log in'}
            </div>
        );
    }
}

export default Persistance(PersonalProfile);