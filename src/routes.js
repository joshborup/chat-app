import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Room from './components/ChatRoom/Room';
import HomeContainer from './components/Home/HomeContainer';
import Callback from './components/shared/Login/Callback';
import ProfileContainer from './components/Profile/ProfileContainer';
import ChatContainer from './components/Chat/ChatContainer';
import PubProfileContainer from './components/PubProfile/PubProfileContainer';

export default (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/chat/:type/:room' component={Room} />
        <Route path='/chat' component={ChatContainer} />
        <Route path='/user/profile' component={ProfileContainer} />
        <Route path='/user/user_profiles/:id' component={PubProfileContainer} />
        <Route basename='/callback' component={Callback} />
        <Route path='/' render={() => {
            return <Redirect to='/'/>
        }}/>
        
    </Switch>
)