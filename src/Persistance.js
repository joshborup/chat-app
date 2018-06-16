import React, {Component} from 'react';
import axios from 'axios';

const userInfo = (PassedComponent) =>
  class UserInfo extends Component {
    state = {
      user: ''
    }
    
    componentDidMount(){
        const cachedUser = sessionStorage.getItem('user');
        console.log(cachedUser);
        
        if (cachedUser != "undefined" && JSON.parse(cachedUser) != null) {
            this.setState({
                user: JSON.parse(cachedUser)
            });
            return;
        }
        axios.get('/user/user_data').then(response => {
            let user = response.data[0];
            this.onSetResult(user)
        })
    }

    onSetResult = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.setState({
            user: user
        });
    }

    render() {
      return (
        <PassedComponent
          {...this.props}
          user={this.state.user}
        />
      )
    }
  }

  export default userInfo;