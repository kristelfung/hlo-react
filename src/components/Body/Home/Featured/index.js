import React, { Component } from 'react';

import {getRandomCaregivers, getRandomJobs} from '../../../../api/api'
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

        getRandomCaregivers().then(json => {
            console.log(json);
            this.setState({
                loadingC: false,
                caregivers: json
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loadingC: false,
                errorMsgC: err
            });
        });

        getRandomJobs().then(json => {
            console.log(json);
            this.setState({
                loadingJ: false,
                jobs: json
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loadingJ: false,
                errorMsgJ: err
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
                                    <Card 
                                        data={this.state.loadingC ? {} : this.state.caregivers[0]}
                                        error={this.state.errorMsgC}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Card 
                                        data={this.state.loadingC ? {} : this.state.caregivers[1]}
                                        error={this.state.errorMsgC}
                                    />
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card 
                                        data={this.state.loadingC ? {} : this.state.caregivers[2]}
                                        error={this.state.errorMsgC}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Card 
                                        data={this.state.loadingC ? {} : this.state.caregivers[3]}
                                        error={this.state.errorMsgC}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center">Featured Jobs</h3>
                            <div className="row feature-row">
                                <div className="col-md-6">
                                    <Card 
                                        data={this.state.loadingJ ? {} : this.state.jobs[0]}
                                        error={this.state.errorMsgJ}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Card 
                                        data={this.state.loadingJ ? {} : this.state.jobs[1]}
                                        error={this.state.errorMsgJ}
                                    />
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-md-6">
                                    <Card 
                                        data={this.state.loadingJ ? {} : this.state.jobs[2]}
                                        error={this.state.errorMsgJ}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Card 
                                        data={this.state.loadingJ ? {} : this.state.jobs[3]}
                                        error={this.state.errorMsgJ}
                                    />
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