import React, { Component } from 'react';
import PubProfileDisplay from './PubProfileDisplay';
import axios from 'axios';
import { AppContext } from '../../ContextProvider';
import Footer from '../shared/Footer';
import './pubprofile.css';

class PublicProfileContainer extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            user: '',
            pubUser: ''
        }
    }

    componentDidMount(){
        axios.get(`/user/user_profile/${this.props.match.params.id}`).then(response => {
            console.log('response.data :', response.data);
            this.setState({
                pubUser: response.data[0]
            })
        })
    }
    
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if(this.state.user !== prevProps.user)
    //     this.setState({
    //         user: prevProps.user
    //     })
    //   }
    


    render() {
        console.log('render state being displayed', this.state);
        console.log('in render method-------', this.state.pubUser);
        return (
            <div className='pub-profile-container'>
             <AppContext.Consumer>
                {(context) => {
               return <div>
               {context.user
                ?
                <div>
                <PubProfileDisplay pubUser={this.state.pubUser}/>
                <Footer />
                </div>
                :
                'Please Log-in or Create an Account'
               }
               </div>
            }}
            </AppContext.Consumer>
            </div>
        );
    }
}

export default PublicProfileContainer;