import React, { Component } from 'react';
import Hero from './Hero';
import Desc from './Desc';
import Pricing from './Pricing';
<<<<<<< HEAD
import Featured from './Featured'
=======
import Featured from './Featured';
>>>>>>> df7a7fc01a1e649dee326e532728995b28d811f0

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