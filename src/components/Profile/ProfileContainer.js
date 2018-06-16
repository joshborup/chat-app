import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import Persistance from '../../Persistance';
import axios from 'axios';
import './profile.css';

class PersonalProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user
        }
    }
    
// sets user data in local storage if session data does not exist then it runs the api call to reset it
    // componentDidMount(){
    //     const cachedUser = sessionStorage.getItem('user');
    //     console.log(cachedUser);
        
    //     if (cachedUser != "undefined" && JSON.parse(cachedUser) != null) {
    //         this.setState({
    //             user: JSON.parse(cachedUser)
    //         });
    //         return;
    //     }
    //     axios.get('/user/user_data').then(response => {
    //         let user = response.data[0];
    //         this.onSetResult(user)
    //     })
    // }

    // onSetResult = (user) => {
    //     sessionStorage.setItem('user', JSON.stringify(user));
    //     this.setState({
    //         user: user
    //     });
    // }

    render() {
        console.log('user from hoc', this.props.user);
        return (
            <div>
                {this.props.user ? <ProfileDisplay user={this.props.user}/> : 'please log in'}
            </div>
        );
    }
}

export default Persistance(PersonalProfile);