import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const HeaderLinks = (props) => {
    let path = window.location.pathname.split('/')[1]
    
    console.log(path)
    return (
        <div className={props.class}>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <Link style={path == '' ? {color: '#DCDCDC'} : {color: 'white'}} to='/'>Home</Link>
                </li>
            </ul>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <Link style={path == 'chat' ? {color: '#DCDCDC'} : {color: 'white'}} to='/chat'>Chat</Link>
                </li>
            </ul>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <Link style={path == 'user' ? {color: '#DCDCDC'} : {color: 'white'}} to='/user/profile'>profile</Link>
                </li>
            </ul>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <a onClick={props.logout}>Logout</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderLinks;