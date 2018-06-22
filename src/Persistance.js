import React, {Component} from 'react';
import axios from 'axios';

const userInfo = (PassedComponent) =>
  class UserInfo extends Component {
    state = {
      
    }
    
    componentDidMount(){
        const cachedState = sessionStorage.getItem('state');
        console.log(cachedState);
        if (cachedState != "undefined" && JSON.parse(cachedState) != null ) {

            if( cachedState != JSON.stringify(this.state) ){
                console.log('hit first');
                this.setState(JSON.parse(cachedState))
                return
            } else {
                console.log('hit second');
                sessionStorage.removeItem('state')
                
            }
        }
        
        axios.get('/user/user_data').then(response => {
            let state = {...this.state, user: response.data[0]}
            this.onSetResult(state)
        }) 
    }

    onSetResult = (state) => {
        sessionStorage.setItem('state', JSON.stringify(state));
        this.setState({...state});
    }

    refreshPersistWhenUpdating = () => {
        this.setState({...this.state})
    }

    render() {
        console.log(this.state)        
      return (
        <PassedComponent
          refreshPersistWhenUpdating={this.refreshPersistWhenUpdating}
          {...this.props}
          {...this.state}
        />
      )
    }
  }

  export default userInfo;