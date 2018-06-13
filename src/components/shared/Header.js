import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import HeaderLinks from '../shared/HeaderLinks';
import axios from 'axios';
import monkey from './media/monkeylogo.svg'
import './header.css';

export default class Header extends Component {

    state = {
        user: '',
        toggle: true
    }

    componentDidMount(){
        axios.get('/user/user_data').then(response => {
            console.log(response)
            this.setState({
                user: response.data[0]
            })
        })
    }

    myToggle = () => {
        this.setState(prevState => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    logout = () => {
        axios.post('/user/logout').then(() => {
          this.setState({
               user: null
             });
        });
        window.location.href = '/';
    }

    render() {
        let mobileToggleClasses = this.state.toggle ? 'links-container-mobile short' : 'links-container-mobile tall';
        return (
            <div className='header-container'>
                <div>
                    <div>
                        <img src={monkey} alt='monkey head logo' />
                    </div>
                    {this.state.user ? 
                    <div className='inner-header-container'>
                        <HeaderLinks class='links-container-desktop' logout={this.logout}/>
                        <HeaderLinks screenType='mobile' myToggle={this.myToggle} class={mobileToggleClasses} logout={this.logout}/>
                        {/* <button className='toggle' onClick={this.myToggle}>toggle</button> */}
                        <button className='toggle' onClick={this.myToggle}>
                            <span className={!this.state.toggle ? 'bar-open' : 'bar-closed'}></span>
                            <span className={!this.state.toggle ? 'bar-open' : 'bar-closed'}></span>
                            <span className={!this.state.toggle ? 'bar-open' : 'bar-closed'}></span>
                        </button>
                    </div>
                    :
                    <Login />
                    }
                </div>
            </div>
        );
    }
}