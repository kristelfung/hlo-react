import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Home from './Home'
import Infopage from "./Infopage";
import Profile from "./Profile"

const infoPageHeader = {
    title: "About",
    subtitle: "Learn about HealthyLovedOnes and the dream team behind it."
}

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home}/>
            <Route path="/about"  render={() => <Infopage header={{infoPageHeader}}/>} />
            <Route path="/profile/:id" component={Profile} />
        </div>
    </BrowserRouter>
);