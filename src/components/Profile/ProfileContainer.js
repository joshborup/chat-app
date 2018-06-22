import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import Persistance from '../../Persistance';
import axios from 'axios';
import myStore from '../shared/myStore';
import Footer from '../shared/Footer';
import './profile.css';

class PersonalProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            profileBackground: '',
            toggle: false,
            email: ''
           
        }
        
    }

    componentDidMount(){
        console.log('this.props.user.email :', this.props.user);
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

    toggle = () => {
        this.setState((prevState) => {
            return {
                clicked: !prevState.clicked
            }
        })
    }

    changeHandler = (key, value) => {
        this.setState({
            [key]:value
        })
    }

    submit = () => {
        this.setState({
            email: this.state.email
        })
        // myStore('state', 'email', this.state.email)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.user ?
                     <ProfileDisplay
                        email={this.state.email}
                        submit={this.submit}
                        toggle={{data: this.state.toggle, func: this.toggle}} 
                        clickedFunc={this.clickedFunc} clicked={this.state.clicked} 
                        profileBackground={this.state.profileBackground}  
                        uploadedImage={this.uploadedImage} 
                        user={this.props.user}
                        changeHandler={this.changeHandler}/> : 'please log in'}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Persistance(PersonalProfile);