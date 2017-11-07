import React, { Component } from 'react';
import aboutimage from '../../../../images/home/home-graphic.png'; 

class Desc extends Component {
    render(){
        return (
            <div className="container home-about">
                <h2>What is HealthyLovedOnes?</h2>
                <img src={aboutimage} className="home-about-media" />
                <video controls="" className="home-about-media" poster="http://healthylovedones.com/assets/images/video-poster.png">
                    <source src="http://healthylovedones.com/assets/images/HLOComplete.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Desc;