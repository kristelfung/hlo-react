import React, { Component } from 'react';
import Hero from './Hero';
import Desc from './Desc';

class Home extends Component {
    render(){
        return (
            <div>
                <Hero/>
                <Desc/>
            </div>
        );
    }
}

export default Home;

// TODO
// <Pricing/>
// <Types/>
// <Featured/>