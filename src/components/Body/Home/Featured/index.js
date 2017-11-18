import React, { Component } from 'react';

import {getFeaturedCaregivers,getFeaturedJobs} from '../../../../api/api'
import Card from '../../../CaregiverCard';

class Featured extends Component {
    constructor(props){
        super(props);
        let dummyCG = {
            about: "",
            stars: 0,
            user: {
                firstName: "",
                lastName: "",
                location: []
            }
        };
        this.state = {
            caregivers: [dummyCG, dummyCG, dummyCG, dummyCG],
            jobs: [],
            loadingC: true,
            loadingJ: true,
            errorMsgC: "",
            errorMsgJ: ""
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
        console.log(this.state.caregivers)
        return(
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-center">Professional Caregivers</h3>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card 
                                        id={this.state.caregivers[0].user.id}
                                        about={this.state.caregivers[0].about} 
                                        stars={this.state.caregivers[0].stars}
                                        firstName={this.state.caregivers[0].user.firstName}
                                        lastName={this.state.caregivers[0].user.lastName}
                                        location={this.state.caregivers[0].user.location}
                                        type = "caregiver"
                                        loading={this.state.loadingC} />
                                </div>
                                <div className="col-sm-6">
                                    <Card 
                                        id={this.state.caregivers[1].user.id}
                                        about={this.state.caregivers[1].about} 
                                        stars={this.state.caregivers[1].stars}
                                        firstName={this.state.caregivers[1].user.firstName}
                                        lastName={this.state.caregivers[1].user.lastName}
                                        location={this.state.caregivers[1].user.location}
                                        type = "caregiver"
                                        loading={this.state.loadingC} />
                                </div>
                            </div>
                            <div className="row feature-row">
                                <div className="col-sm-6">
                                    <Card 
                                        id={this.state.caregivers[2].user.id}
                                        about={this.state.caregivers[2].about} 
                                        stars={this.state.caregivers[2].stars}
                                        firstName={this.state.caregivers[2].user.firstName}
                                        lastName={this.state.caregivers[2].user.lastName}
                                        location={this.state.caregivers[2].user.location}
                                        type = "caregiver"
                                        loading={this.state.loadingC} />
                                </div>
                                <div className="col-sm-6">
                                    <Card 
                                        id={this.state.caregivers[3].user.id}
                                        about={this.state.caregivers[3].about} 
                                        stars={this.state.caregivers[3].stars}
                                        firstName={this.state.caregivers[3].user.firstName}
                                        lastName={this.state.caregivers[3].user.lastName}
                                        location={this.state.caregivers[3].user.location}
                                        type = "caregiver"
                                        loading={this.state.loadingC} />
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