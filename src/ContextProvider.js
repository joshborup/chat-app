import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();


export default class ContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            user:'',
            aboutMe: '',
            facebook: '',
            instagram: '',
            linkedin: '',
            profileBackground:'',
            toggle: true,
            methods:{
                changeHandler: (key, value) => {
                    this.setState({
                        [key]:value
                    })
                },
                toggle: () => {
                    this.setState((prevState) => {
                        console.log('prevState',prevState)
                        return {
                            toggle: !prevState.toggle
                        }
                    })
                },            
                update: () => {
                    let update = {
                         aboutMe: this.state.aboutMe,
                         facebook: this.state.facebook,
                         instagram: this.state.instagram,
                         linkedin: this.state.linkedin,
                     }
                     axios.post('/user/update_profile', {update}).then((response)=> {
                         this.setState({
                             aboutMe: response.data[0].aboutMe,
                             facebook: response.data[0].facebook,
                             instagram: response.data[0].instagram,
                             linkedin: response.data[0].linkedin,
                         })
                         console.log('response.data :', response.data);
                         this.state.methods.toggle();
                     })
                 },
                 uploadedImage: (profileBackground) => {

                    axios.post('/user/edit_profile_background', {profileBackground: profileBackground}).then(response => {
                        console.log('response ===================================',  response);
                        
                        this.setState({
                            user: response.data
                        })
            
                    })
                }
            }
            
        }
    }

    componentDidMount(){
        function getUser(){
            return axios.get('/user/user_data')
        }
        
        function getProfile(){
            return axios.get('/user/profile_data')
        }


        axios.all([getProfile(), getUser()]).then(axios.spread((profile, user)=> {

            if(profile.data.length && user.data[0]){
                this.setState({
                    user: user.data[0],
                    aboutMe: profile.data[0].about_me,
                    facebook: profile.data[0].facebook,
                    instagram: profile.data[0].instagram,
                    linkedin: profile.data[0].linkedin,
                    profileBackground: user.data[0].profile_background
                })
            }
        }))
    }

    render() {

        console.log('kjhjhljhljhj======-------------------------',this.state.profileBackground)
        return  <AppContext.Provider value={this.state}>
                     {this.props.children}
                </AppContext.Provider>
    }
}