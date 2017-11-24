import React, { Component } from 'react';

import Button from '../../../Button';

class Hero extends Component {
    render(){
        return (
            <div>
                <div className="jumbotron">
                    <div className="container-fluid hlo-desc">
                        <h1>Find a trusted Caregiver nearby in just a few clicks.</h1>
                    </div>
                    <div className="container-fluid home-buttons">
                        <h4>Everyone deserves care.</h4>
                        <p>Find the right Caregiver for your Loved Ones, or become a Caregiver yourself.</p>
                        <Button text="Find a Caregiver" link="searchcaregivers" buttonType="btn btn-primary" />
                        <Button text="Become a Caregiver" link="searchcaregivers" buttonType="btn btn-default-clear" />
                    </div>
                </div>

                <div className="container-fluid green-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h5>TLC: Tender Loving Care.</h5>
                            </div>
                            <div className="col-sm-8">
                                <h5> In sports, adversity produces Champions. In business, adversity produces Disruptors.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
