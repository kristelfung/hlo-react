import React, { Component } from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Pricing from './Pricing';
import Featured from './Featured';

// TEMPORARY
import Messages from '../Infopage/Dashboard/Messages';

class Home extends Component {
    render(){
        return (
            <div>
                <Hero/>
                <Desc/>
                <Pricing/>
                <Featured/>
                <Messages/>
            </div>
        );
    }
}

export default Home;

// TODO
// <Types/>