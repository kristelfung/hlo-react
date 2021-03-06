import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom';

import Home from "./Home";
import Search from "./Search";
import About from "./About";
import Profile from "./Profile";
import Job from './Profile/Job';
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import QandA from "./QandA";
import Contact from "./Contact";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Guidelines from "./Guidelines";
import Experts from "./Experts";

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" render={() => (<Redirect to="/"/> )}/>
            <Route exact path="/medicalexperts" component={Experts} />
            <Route path="/searchcaregiver"  render={() => <Search type="caregiver" /> } />
            <Route path="/searchjob"  render={() => <Search type="job" /> } />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/about" component={About} />
            <Route exact path="/profile/job/:id" component={Job} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route path="/contact" component={Contact} />
            <Route path="/QandA" component={QandA} />
            <Route path="/careers" />
            <Route path="/press" />
            <Route path="/blog" />
            <Route path="/newsletter" />
            <Route path="/terms" component={Terms}/>
            <Route path="/privacy" component={Privacy}/>
            <Route path="/insurance" />
            <Route path="/guidelines" component={Guidelines} />
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
