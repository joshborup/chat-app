import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div>
                    <div>
                        {'logo here'}
                    </div>
                    <div className='links-container'>
                        <ul>
                            <li className='link-1'>
                                <a href={`https://${window.location.hostname}`}>Home</a>
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
                                profile
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
                </div>
            </div>
        );
    }
}