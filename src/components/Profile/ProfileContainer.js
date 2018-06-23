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
            toggle: true,
            email: '',
            aboutMe: '',
            facebook:'',
            instagram:'',
            linkedin:''
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
                toggle: !prevState.toggle
            }
        })
    }

    changeHandler = (key, value) => {
        this.setState({
            [key]:value
        })
    }

    update = () => {
       let update = {
            aboutMe: this.state.aboutMe,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            linkedin: this.state.linkedin,
        }
        console.log('update :', update);
        // axios.post('/user/update_profile', update).then((response)=> {
        //     this.setState({
        //         aboutMe: response.data[0].aboutMe,
        //         facebook: response.data[0].facebook,
        //         instagram: response.data[0].instagram,
        //         linkedin: response.data[0].linkedin,
        //     })
        //     this.toggle();
        // })
        this.toggle();
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
                        changeHandler={this.changeHandler}
                        aboutMe={this.state.aboutMe}
                        facebook={this.state.facebook}
                        instagram={this.state.instagram}
                        linkedin={this.state.linkedin}
                        update={this.update}
                        /> : 'please log in'}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Persistance(PersonalProfile);