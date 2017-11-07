import React, { Component } from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Pricing from './Pricing';
import Featured from './Featured'

class Home extends Component {
    render(){
        return (
            <div>
                <Hero/>
                <Desc/>
                <Pricing/>
                <Featured/>
            </div>
        );
    }
}

export default Home;

// TODO
// <Types/>