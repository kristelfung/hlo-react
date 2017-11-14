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
        console.log(this.state.caregivers);
        return(
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-center">Professional Caregivers</h3>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[0]} />
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[1]} />
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[2]} />
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.caregivers[3]} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center">Featured Jobs</h3>
                            <div className="row feature-row">
                                <div className="col-md-6">
                                    <Card {...this.state.jobs[0]} />
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.jobs[1]} />
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-md-6">
                                    <Card {...this.state.jobs[2]} />
                                </div>
                                <div className="col-sm-6">
                                    <Card {...this.state.jobs[3]} />
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