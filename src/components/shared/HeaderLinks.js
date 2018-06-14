import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const HeaderLinks = (props) => {
    return (
        <div className={props.class}>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <Link to='/group/cool'>Chat</Link>
                </li>
            </ul>
            <ul>
                <li onClick={props.myToggle} className='link-1'>
                    <Link to='/user/profile'>profile</Link>
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