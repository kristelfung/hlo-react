import React, { Component } from 'react';

import {getUser, getListedJobs} from '../../../../api/api';

class Jobs extends Component {
	constructor(props){
        super(props);
        this.state = {
            type: props.type,
            data: {
                jobsApplied: [],
                jobsReceived: [],
                jobsCreated: []
            },
            loading: true
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.type === "caregiver"){
            this.setState({
                type: nextProps.type,
                data: {
                    jobsApplied: nextProps.caregiver.jobsApplied,
                    jobsReceived: nextProps.caregiver.jobsReceived,
                }
            })
        }else{
            this.setState({
                type: nextProps.type,
                data: {
                    jobsCreated: nextProps.jobsCreated
                }
            })
        }
    }

    render(){
        return (
        	<div className="dashbody">
		        <div className="container">
		            <div className="row">
		                <div className="col-xs-6">
		                    <h2>Listed Jobs</h2>
		                </div>
                        {(this.state.type === "customer") ?
                            <div className="col-xs-6 button-col">
                                <a className="btn btn-primary" href="#" role="button">Add Job</a>
                            </div>
                            :
                            <div></div>
                        }
		                
		            </div>
                    {(this.state.type === "caregiver") ?
    		            <div className="container-fluid">
    		                {
                            	this.state.data.jobsApplied.map(job => <Job key={job.id} {...job}/>)
                            }
    		            </div>
                        :
                        <div className="container-fluid">
                            {
                                this.state.data.jobsCreated.map(job => <CustomerJob key={job.id} {...job}/>)
                            }
                        </div>
                    }
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
                <div className="col-xs-6 job-left">
                    <img src="images/dashboard/confirmedjob.png" className="job-status" />
                    <span className="expand-job"><i className="fa fa-angle-down expand-job" aria-hidden="true"></i></span>
                </div>
            </div>
		);
	}
}
class CustomerJob extends Component{
    render(){
        return (

            <div class="row job">
                <div class="col-xs-6">
                    <h4>{this.props.jobsCreated.name}</h4> 

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