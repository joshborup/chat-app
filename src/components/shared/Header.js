import React, { Component } from 'react';
import Login from '../shared/Login/Login';
import HeaderLinks from '../shared/HeaderLinks';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../ContextProvider';
import monkey1 from './media/monkeylogo1.svg'
import monkey2 from './media/monkeylogo2.svg'
import monkey3 from './media/monkeylogo3.svg'
import monkey4 from './media/monkeylogo4.svg'
import monkey5 from './media/monkeylogo5.svg'
import monkey6 from './media/monkeylogo6.svg'
import monkey7 from './media/monkeylogo7.svg'
import monkey8 from './media/monkeylogo8.svg'
import monkey9 from './media/monkeylogo9.svg'
import monkey10 from './media/monkeylogo10.svg'
import monkey11 from './media/monkeylogo11.svg'
import './header.css';

class Header extends Component {

    state = {
        user: '',
        toggle: true
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
        console.log('props test', this.props);;
        let {user} = this.props;
        let num = Math.floor(Math.random() * (11 - 1) + 1);
        let monkey = [monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7, monkey8, monkey9, monkey10, monkey11]

        let mobileToggleClasses = this.state.toggle ? 'links-container-mobile short' : 'links-container-mobile tall';
        return (
            <div className='header-container'>
                <div>
                    <Link to='/'>
                        <div className='logo-container'>
                            <img src={monkey[num]} alt='monkey head logo' />
                            <h1>MonkeyChat</h1>
                        </div>
                    </Link>
                    <AppContext.Consumer>
                        {(context) => {
                        return  context.user ? <div className='inner-header-container'>
                            <HeaderLinks  class='links-container-desktop' logout={this.logout}/>
                            <HeaderLinks  screenType='mobile' myToggle={this.myToggle} class={mobileToggleClasses} logout={this.logout}/>
                            <button className='toggle' onClick={this.myToggle}>
                                <span className={!this.state.toggle ? 'bar-open' : 'bar-closed'}></span>
                                <span className={!this.state.toggle ? 'bar-open' : 'bar-closed'}></span>
                                <span className={!this.state.toggle ? 'bar-open' : 'bar-closed'}></span>
                            </button>
                        </div>
                        :
                        <Login label='LOGIN' />
                        }}
                    </AppContext.Consumer>
                </div>
            </div>
        );
    }
}

export default Header