import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import Infopage from "./Infopage";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";

const aboutHeader = {
    title: "About",
    subtitle: "Learn about HealthyLovedOnes and the dream team behind it."
}

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" render={() => (<Redirect to="/"/> )}/>    
            <Route path="/searchcaregiver" component={Search} />
            <Route path="/searchcustomer" component={Search} />        
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/about"  render={() => <Infopage header={{aboutHeader}}/>} />
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