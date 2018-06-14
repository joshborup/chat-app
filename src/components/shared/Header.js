import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import HeaderLinks from '../shared/HeaderLinks';
import axios from 'axios';
import monkey1 from './media/monkeylogo1.svg'
import monkey2 from './media/monkeylogo2.svg'
import monkey3 from './media/monkeylogo3.svg'
import monkey4 from './media/monkeylogo4.svg'
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

        let num = Math.floor(Math.random() * (4 - 1) + 1);
        let monkey = [monkey1, monkey2, monkey3, monkey4]

        console.log(monkey1)
        let mobileToggleClasses = this.state.toggle ? 'links-container-mobile short' : 'links-container-mobile tall';
        return (
            <div className='header-container'>
                <div>
                    <div>
                        <img src={monkey[num]} alt='monkey head logo' />
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