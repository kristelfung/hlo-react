import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'
import {getUser} from '../../../../api/api'
import Dashboard from '../../Dashboard';
class Profile extends Component {
    render(){
        return (
        	<div className="dashbody">
		        <div className="container-small">
		            <form>
		                <div className="row">
		                    <h3 className="form-title">Basic Information</h3>
		                    <div className="col-md-6 form-column">
		                        <div className="form-group">
		                          <label for="firstname">First name</label>
		                          <input type="text" className="form-control" id="firstname" value = {this.props.firstName} />
		                        </div>
		                        <div className="form-group">
		                          <label for="lastName">Last name</label>
		                          <input type="text" className="form-control" id="lastName" value = {this.props.lastName} />
		                        </div>
		                        {!(this.props.type==="customer") ?
		                        	<div className="form-group">
			                          <label for="hourlyRate">Hourly rate</label>
			                          <input type="text" className="form-control" id="hourlyRate" value = {this.props.caregiver[0].hourlyRate}/>
			                        </div>
		                    	 
		                    		:
		                    		<div></div>
		                    	}

		                    </div>
		                    {!(this.props.type==="customer") ?
		                    	<div className="col-md-6 form-column">
			                        <div className="form-group">
			                          <label for="location">Location</label>
			                          <input type="text" className="form-control" id="location" value = {this.props.location} />
			                        </div>
			                        
			                        <div className="form-group">
			                          <label for="education">Education</label>
			                          <input type="text" className="form-control" id="education" value = {this.props.caregiver[0].education} />
			                        </div>
			                        <div className="form-group">
			                          <label for="experience">Experience</label>
			                          <input type="text" className="form-control" id="experience" value = {this.props.caregiver[0].experience} />
			                        </div>
			                        <div className="form-group">
			                          <label for="languages">Languages</label>
			                          <input type="text" className="form-control" id="languages" value = {this.props.caregiver[0].languages} />
			                        </div>
			                        <div className="form-group">
			                          <label for="othernotes">Other notes</label>
			                          <input type="text" className="form-control" id="othernotes" value = {this.props.caregiver[0].otherNotes}/>
			                        </div>
				                </div>
			                    :
			                    <div className="col-md-6 form-column">
			                        <div className="form-group">
			                          <label for="location">Location</label>
			                          <input type="text" className="form-control" id="location" value = {this.props.location} />
			                        </div>
				                </div>
		                    }
		                   
		                </div>
		                <h3></h3>
		                {!(this.props.type=="customer") ?
			                <div className="form-group">
			                  <label for="comment">About</label>
			                  <textarea className="form-control" rows="5" id="comment" value={this.props.caregiver[0].about}></textarea>
			                </div>
			            :
			            	<div></div>
			            }
		                <button type="submit" className="btn btn-primary form-btn">Save</button>

		            </form>
		        </div>
		    </div>
        );
    }
}

export default Profile;