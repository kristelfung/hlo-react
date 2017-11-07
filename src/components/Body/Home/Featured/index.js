import React, { Component } from 'react';
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;