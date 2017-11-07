import React, { Component } from 'react';
<<<<<<< HEAD
import CaregiverCard from '../../../CaregiverCard';

import './_featured.scss'; 

class Featured extends Component {
    render(){
        return (
            <div className="container-fluid featured">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Professional Caregivers</h3>
                        <div className="row feature-row">
                            <div className="col-sm-6">
                                <CaregiverCard />
                            </div>
                            <div className="col-sm-6">
                                <CaregiverCard />
                            </div>
                        </div>
                        <div className="row feature-row">
                            <div className="col-md-6">
                                <CaregiverCard />
                            </div>
                            <div className="col-sm-6">
                                <CaregiverCard />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Featured Jobs</h3>
                        <div className="row feature-row">
                            <div className="col-md-6">
                                <CaregiverCard />
                            </div>
                            <div className="col-sm-6">
                                <CaregiverCard />
                            </div>
                        </div>
                        <div className="row feature-row">
                            <div className="col-md-6">
                                <CaregiverCard />
                            </div>
                            <div className="col-sm-6">
                                <CaregiverCard />
=======

import Card from '../../Search/Card';

class Featured extends Component {
    render() {
        return(
            <div class="featured">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="text-center">Professional Caregivers</h3>
                            <div class="row feature-row">
                                <div class="col-sm-6">
                                    <Card/>
                                </div>
                                <div class="col-sm-6">
                                    <Card/>
                                </div>
                            </div>
                            <div class="row feature-row">
                                <div class="col-md-6">
                                    <Card/>
                                </div>
                                <div class="col-sm-6">
                                    <Card/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h3 class="text-center">Featured Jobs</h3>
                            <div class="row feature-row">
                                <div class="col-md-6">
                                    <Card/>
                                </div>
                                <div class="col-sm-6">
                                    <Card/>
                                </div>
                            </div>
                            <div class="row feature-row">
                                <div class="col-md-6">
                                    <Card/>
                                </div>
                                <div class="col-sm-6">
                                    <Card/>
                                </div>
>>>>>>> df7a7fc01a1e649dee326e532728995b28d811f0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;