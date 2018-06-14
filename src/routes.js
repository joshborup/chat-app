import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Group from './components/GroupChat/Group';
import HomeContainer from './components/Home/HomeContainer';
import Callback from './components/shared/Login/Callback';
import ProfileContainer from './components/Profile/ProfileContainer';

export default (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/group/:room' component={Group} />
        <Route path='/user/profile' component={ProfileContainer} />
        <Route basename='/callback' component={Callback} />
        <Redirect to='/' />
    </Switch>
)