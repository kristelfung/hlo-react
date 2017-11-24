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
import Job from './Profile/Job';
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
            <Route path="/search/caregiver"  render={() => <Search type="caregiver" /> } />
            <Route path="/search/job"  render={() => <Search type="job" /> } />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/about"  render={() => <Infopage header={{aboutHeader}}/>} />
            <Route exact path="/profile/job/:id" component={Job} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route path="/contact_us" />
            <Route path="/QandA" />
            <Route path="/careers" />
            <Route path="/press" />
            <Route path="/blog" />
            <Route path="/newsletter" />
            <Route path="/terms" />
            <Route path="/privacy" />
            <Route path="/insurance" />
            <Route path="/guidelines" />
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
