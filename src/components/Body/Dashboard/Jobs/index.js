import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'


class Jobs extends Component {
	constructor(props){
        super(props);
        this.state = {
            data: {
                jobsApplied: [],
            },
            loading: true
        }

        getProfile("59e20105895a3eac24e267ba").then(json => {
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
        	<div className="dashbody">
		        <div className="container">
		            <div className="row">
		                <div className="col-xs-6">
		                    <h2>Listed Jobs</h2>
		                </div>
		                <div className="col-xs-6 button-col">
		                    <a className="btn btn-primary" href="#" role="button">Add Job</a>
		                </div>
		            </div>
		            <div className="container-fluid">
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
			<div className="row job">
                <div className="col-xs-6">
                    <h4>{this.props.jobsApplied.name}</h4>
                </div>
                <div className="col-xs-6 job-left">
                    <img src="images/dashboard/confirmedjob.png" className="job-status" />
                    <span className="expand-job"><i className="fa fa-angle-down expand-job" aria-hidden="true"></i></span>
                </div>
            </div>
		);
	}
}
export default Jobs;