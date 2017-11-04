import React, { Component } from 'react';

import Button from '../../../Button';

class Hero extends Component {
    render(){
        return (
            <div>
                <div class="jumbotron">
                    <div class="container-fluid hlo-desc">
                        <h1>Find a trusted Caregiver nearby in just a few clicks.</h1>
                    </div>
                    <div class="container-fluid home-buttons">
                        <h4>Everyone deserves care.</h4>
                        <p>Find the right Caregiver for your Loved Ones, or become a Caregiver yourself.</p>
                        <Button text="Find a Caregiver" link="searchcaregivers" buttonType="btn btn-primary" />
                        <a class="btn btn-default-clear" href="#" role="button">Become a Caregiver</a>
                    </div>
                </div>

                <div class="container-fluid green-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <h5>HLO is Homecare.</h5>
                            </div>
                            <div class="col-sm-8">
                                <h5><a href="#">Care News: All jobs now come with $18 million...</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
