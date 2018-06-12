import React, { Component } from 'react';
import axios from 'axios';
import loader from './loader.gif';

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

        const style = {
            width: '200px'
        }

        return (
            <div>
                <img style={style} src={loader} />
            </div>
        );
    }
}   