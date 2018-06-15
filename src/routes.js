import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Room from './components/ChatRoom/Room';
import HomeContainer from './components/Home/HomeContainer';
import Callback from './components/shared/Login/Callback';
import ProfileContainer from './components/Profile/ProfileContainer';
import ChatContainer from './components/Chat/ChatContainer'

export default (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/chat/:type/:room' component={Room} />
        <Route path='/chat' component={ChatContainer} />
        <Route path='/user/profile' component={ProfileContainer} />
        <Route basename='/callback' component={Callback} />
        <Redirect to='/' />
    </Switch>
)