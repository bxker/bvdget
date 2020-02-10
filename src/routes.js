import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';


export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        {/* <Route path="/register" component={Register} />
        <Route path="/login" component={Login} /> */}
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>
)