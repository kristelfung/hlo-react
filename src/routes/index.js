import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Home from "./Home";
import About from "./About";

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
);