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
                location: [],
                profilePicUrl: ""
            }
        };
        let dummyJob = {
            description: "",
            name: "",
            gender: "",
        };
        this.state = {
            caregivers: [dummyCG, dummyCG, dummyCG, dummyCG],
            jobs: [dummyJob, dummyJob, dummyJob, dummyJob],
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
                loadingJ: false,
                jobs: json.data
            });
        }).catch(err => {
            console.log("err"+err);
            this.setState({
                loadingJ: false,
                errorMsgC: err
            });
        });
    }
    
    render() {
        
        if(this.state.loadingC==false && this.state.loadingJ==false){
            return(
                <div className="featured">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-center">Professional Caregivers</h3>
                                <div className="row feature-row">
                                    <div className="col-sm-6">
                                        <Card 
                                            {...this.state.caregivers[0].user}  
                                            {...this.state.caregivers[0]} 
                                            type = "caregiver"
                                            loading={this.state.loadingC} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Card 
                                            {...this.state.caregivers[1].user}  
                                            {...this.state.caregivers[1]} 
                                            type = "caregiver"
                                            loading={this.state.loadingC} />
                                    </div>
                                </div>
                                <div className="row feature-row">
                                    <div className="col-sm-6">
                                        <Card 
                                            {...this.state.caregivers[2].user}                                                                            
                                            {...this.state.caregivers[2]} 
                                            type = "caregiver"
                                            loading={this.state.loadingC} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Card 
                                            {...this.state.caregivers[3].user}
                                            {...this.state.caregivers[3]} 
                                            type = "caregiver"
                                            loading={this.state.loadingC} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-center">Featured Jobs</h3>
                                <div className="row feature-row">
                                    <div className="col-md-6">
                                        <Card {...this.state.jobs[0]} type = "job" loading={this.state.loadingJ} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Card {...this.state.jobs[1]} type = "job" loading={this.state.loadingJ} />
                                    </div>
                                </div>
                                <div className="row feature-row">
                                    <div className="col-md-6">
                                        <Card {...this.state.jobs[2]} type = "job" loading={this.state.loadingJ} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Card {...this.state.jobs[3]} type = "job" loading={this.state.loadingJ} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div> Loading </div>
            )
        }
        
    }
}

export default Featured;