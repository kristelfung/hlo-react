import React, { Component } from 'react';

class Desc extends Component {
    render(){
        return (
            <div class="container home-about">
                <h2>What is HealthyLovedOnes?</h2>
                <img src="images/home-graphic.png" class="home-about-media" />
                <video controls="" class="home-about-media" poster="http://healthylovedones.com/assets/images/video-poster.png">
                    <source src="http://healthylovedones.com/assets/images/HLOComplete.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Desc;