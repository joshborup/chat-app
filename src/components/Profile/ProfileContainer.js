import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import axios from 'axios';
import Footer from '../shared/Footer';
import { AppContext } from '../../ContextProvider';
import './profile.css';

class PersonalProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user,
            profileBackground: '',
            toggle: true,
            backLoaderToggle: false,
            email: '',
            aboutMe: '',
            facebook:'',
            instagram:'',
            linkedin:''
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

    backLoaderToggleFunc = () => {
        this.setState((prevState) => {
            return {
                backLoaderToggle: !prevState.backLoaderToggle
            }
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
        axios.post('/user/update_profile', {update}).then((response)=> {
            // this.setState({
            //     aboutMe: response.data[0].aboutMe,
            //     facebook: response.data[0].facebook,
            //     instagram: response.data[0].instagram,
            //     linkedin: response.data[0].linkedin,
            // })
            console.log('response.data :', response.data);
            this.toggle();
        })
    }

    render() {
        console.log('this.state.backLoaderToggleFunc :', this.state.aboutMe);
        return (
            <div>
                
                <div>
                <AppContext.Consumer>
                {(context) => {
                    

                     return  context.user ?  <ProfileDisplay
                        email={this.state.email}
                        submit={this.submit}
                        toggle={{data: this.state.toggle, func: this.toggle}} 
                        backLoaderToggleFunc={this.backLoaderToggleFunc}
                        backLoaderToggle={this.state.backLoaderToggle} 
                        profileBackground={this.state.profileBackground}  
                        uploadedImage={this.uploadedImage} 
                        user={context.user}
                        changeHandler={this.changeHandler}
                        aboutMe={context.aboutMe}
                        facebook={context.facebook}
                        instagram={context.instagram}
                        linkedin={context.linkedin}
                        update={this.update}
                        /> 
                        : 'please log in'}
                    }
                    </AppContext.Consumer>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default PersonalProfile;