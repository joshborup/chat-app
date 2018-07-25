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
            backLoaderToggle: false,
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

    


    backLoaderToggleFunc = () => {
        this.setState((prevState) => {
            return {
                backLoaderToggle: !prevState.backLoaderToggle
            }
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
                        toggle={{data: context.toggle, func: context.methods.toggle}} 
                        backLoaderToggleFunc={this.backLoaderToggleFunc}
                        backLoaderToggle={this.state.backLoaderToggle} 
                        profileBackground={this.state.profileBackground}  
                        uploadedImage={this.uploadedImage} 
                        user={context.user}
                        changeHandler={context.methods.changeHandler}
                        aboutMe={context.aboutMe}
                        facebook={context.facebook}
                        instagram={context.instagram}
                        linkedin={context.linkedin}
                        update={context.methods.update}
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