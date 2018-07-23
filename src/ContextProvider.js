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
            methods:{
                getProfile: () => {
                    
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

        axios.all([getProfile(), getUser()]).then(axios.spread((profile, user) => {
            console.log(user.data[0]);
            if(profile.data.length && user.data[0]){
                this.setState({
                    user: user.data[0],
                    aboutMe: profile.data[0].about_me,
                    facebook: profile.data[0].facebook,
                    instagram: profile.data[0].instagram,
                    linkedin: profile.data[0].linkedin
                })
            }
        }))
    }

    render() {
        return  <AppContext.Provider value={this.state}>
                     {this.props.children}
                </AppContext.Provider>
    }
}