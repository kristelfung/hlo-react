import React, { Component } from 'react';
import aboutimage from '../../../../images/home/home-graphic.png'; 
import video from '../../../../images/home/home-video.mp4';

class Desc extends Component {
    render(){
        return (
            <div className="container home-about">
                <h2>What is HealthyLovedOnes?</h2>
                <img src={aboutimage} className="home-about-media" />
                <video controls className="home-about-media">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default Desc;