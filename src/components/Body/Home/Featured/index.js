import React, { Component } from 'react';

import {getFeaturedCaregivers,getFeaturedJobs} from '../../../../api/api'
import Card from '../../../CaregiverCard';

class Featured extends Component {
    constructor(props){
        super(props);
        this.state = {
            caregivers: [],
            jobs: [],
            loadingC: true,
            loadingJ: true,
            errorMsgC: "",
            errorMsgJ: "",
        }
        getFeaturedCaregivers().then(json => {
            this.setState({
                loadingC: false,
                caregivers: json.data
            });
        }).catch(err => {
            console.log("err"+err);
            this.setState({
                loadingC: false,
                errorMsgC: err
            });
        });
        getFeaturedJobs().then(json => {
            console.log(json.data);
            this.setState({
                loadingC: false,
                jobs: json.data
            });
        }).catch(err => {
            console.log("err"+err);
            this.setState({
                loadingC: false,
                errorMsgC: err
            });
        });
        
    }
    
    render() {
        return(
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-center">Professional Caregivers</h3>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[0]} type = "caregiver"/>
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[1]} type = "caregiver"/>
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[2]} type = "caregiver"/>
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[3]} type = "caregiver"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center">Featured Jobs</h3>
                            <div className="row feature-row">
                                <div className="col-md-6">
                                    <Card {...this.state.jobs[0]} type = "job"/>
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.jobs[1]} type = "job"/>
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-md-6">
                                    <Card {...this.state.jobs[2]} type = "job"/>
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.jobs[3]} type = "job"/>
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