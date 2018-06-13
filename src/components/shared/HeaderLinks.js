import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class HeaderLinks extends Component {
    render() {
        return (
            <div className='links-container'>
                <ul>
                    <li className='link-1'>
                        <Link to='/group/cool'>Chat</Link>
                    </li>
                </ul>

                <ul>
                    <li className='link-1'>
                        <Link to='/'>profile</Link>
                    </li>
                </ul>
            </div>
        );
    }
}