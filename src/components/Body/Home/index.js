import React, { Component } from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Pricing from './Pricing';

class Home extends Component {
    render(){
        return (
            <div>
                <Hero/>
                <Desc/>
                <Pricing/>
            </div>
        );
    }
}

export default Home;

// TODO
// <Pricing/>
// <Types/>
// <Featured/>