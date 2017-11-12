import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom';

import Home from './Home'
import Infopage from "./Infopage";
import Profile from "./Profile"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Signup from "./Signup"

const infoPageHeader = {
    title: "About",
    subtitle: "Learn about HealthyLovedOnes and the dream team behind it."
}

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" render={() => (<Redirect to="/"/> )}/>            
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/about"  render={() => <Infopage header={{infoPageHeader}}/>} />
            <Route path="/profile/:id" component={Profile} />
            <Route exact path="/dashboard" render={() => (
                sessionStorage.getItem('loggedIn') === null ? (
                    <Redirect to="/login"/>
                ) : (
                    <Dashboard/>
                )
            )}/>
        </div>
    </BrowserRouter>
);