import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Qtemu from './Qtemu';
import CreateMeetup from './Real/CreateMeetup';
import Explore from './Real/Explore';
import Login from './Real/Login'; 
import NotFound from './Real/NotFound';
import { Provider } from "react-redux";
import store from './Redux'

export default class RouterDefine extends Component {
    render() {
        return (
            <Provider store={store}> 
                <Router>
                    <Switch>
                        <Route exact path="/" component={Qtemu} />
                        <Route path="/create-meetup" component={CreateMeetup} />
                        <Route path="/explore" component={Explore} />
                        <Route exact path="/login" component={Login} />
                        {/* <Route path="/login/:name" component={Login} /> */}
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}