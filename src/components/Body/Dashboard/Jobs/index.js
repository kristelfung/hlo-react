import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'


class Jobs extends Component {
	constructor(props){
        super(props);
        this.state = {
            data: {
                firstName: "",
                lastName: "",
                about: "",
                availability: {},
                backgroundCheck: false,
                car: false,
                education: "",
                experience: "",
                hourlyRate: 60,
                location: [],
                otherNotes: "",
                reviews: [],
                stars: 0,
                languages: []
            },
            loading: true
        }

        getProfile("5a029e58dc5c6d379bcb9108").then(json => {
            console.log(json);
            this.setState({
                loading: false,
                data: json
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });
    }
    render(){
        return (
        	<div class="dashbody">
		        <div class="container">
		            <div class="row">
		                <div class="col-xs-6">
		                    <h2>Listed Jobs</h2>
		                </div>
		                <div class="col-xs-6 button-col">
		                    <a class="btn btn-primary" href="#" role="button">Add Job</a>
		                </div>
		            </div>
		            <div class="container-fluid">
		                {
                        	this.state.data.jobsApplied.map(jobsApplied => <Job {...jobsApplied}/>)
                        }
		            </div>
		        </div>
		    </div>
        );
    }
}

class Job extends Component{
	
	render(){
		return (
			<div class="row job">
                <div class="col-xs-6">
                    <h4>{this.props.jobsApplied.name}</h4>
                </div>
                <div class="col-xs-6 job-left">
                    <img src="images/dashboard/confirmedjob.png" class="job-status" />
                    <span class="expand-job"><i class="fa fa-angle-down expand-job" aria-hidden="true"></i></span>
                </div>
            </div>
		);
	}
}
export default Jobs;