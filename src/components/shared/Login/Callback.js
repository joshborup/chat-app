import React, { Component } from 'react';
import axios from 'axios';
import * as animationData from '../media/lego_loader.json'
import Lottie from 'react-lottie';

export default class Callback extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
    }

    componentDidMount(){
        
        let test = window.location.href.includes('=') ? window.location.href.split('access_token=')[1].split('&')[0] : '';

        console.log(test)
        
        
        if(test) {
            
            axios.post('/user/login', {access_token: test}).then(()=>{
                
                window.location.href = `${window.location.origin}`
            })

            }
        }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
    

        return (
            <div className='loading-gif'>
                <Lottie options={defaultOptions}
                width={'600px'}/>
            </div>
        );
    }
}   