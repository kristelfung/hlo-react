import React, { Component } from 'react';

import Card from '../../../CaregiverCard';

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;