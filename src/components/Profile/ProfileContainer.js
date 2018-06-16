import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import Persistance from '../../Persistance';
import './profile.css';

class PersonalProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: this.props.user
        }
    }

    render() {
        return (
            <div>
                {this.props.user ? <ProfileDisplay user={this.props.user}/> : 'please log in'}
            </div>
        );
    }
}

export default Persistance(PersonalProfile);