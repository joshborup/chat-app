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

                    <li className='link-2'>
                        chat
                    </li>

                        <li className='link-3'>
                        chat
                    </li>

                        <li className='link-4'>
                        chat
                    </li>
                </ul>

                <ul>
                <li className='link-1'>
                        <Link to='/'>profile</Link>
                    </li>

                    <li className='link-2'>
                        profile
                    </li>

                    <li className='link-3'>
                        profile
                    </li>

                    <li className='link-4'>
                        profile
                    </li>
                </ul>
            </div>
        );
    }
}