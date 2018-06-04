import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Group from './components/GroupChat/Group';
import Login from './components/Login/Login';
import Callback from './components/Login/Callback';

export default (
    
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/group/:room' component={Group} />
        <Route path='/callback' component={Callback} />
        <Route path='*' component={Login}/>
    </Switch>

)