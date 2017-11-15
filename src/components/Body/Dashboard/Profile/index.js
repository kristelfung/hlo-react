import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'
import {getUser} from '../../../../api/api'
import Dashboard from '../../Dashboard';
import {updateCustomerProfile} from '../../../../api/api'
import {updateCaregiverProfile} from '../../../../api/api'

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			firstName :"",
			lastName:"",
			hourlyRate:"",
			location:"",
			education:"",
			experience:"",
			languages:"",
			otherNotes:"",
			about:"",
		}
		this.save = this.save.bind(this);
	}
		
	save(e){
	    e.preventDefault();
	    let information = {
    		firstName : this.state.firstName,
    		lastName: this.state.lastName,
    		location : this.state.location,
    		id:this.props.userID
	    }
    	updateCustomerProfile(information);
	    if(this.props.type=="caregiver"){
	    	let caregiverInfo = {
	    		id:this.props.userID,
	    		education:this.state.education,
	    		experience:this.state.experience,
	    		languages:this.state.languages,
	    		otherNotes:this.state.otherNotes,
	    		about:this.state.otherNotes,
	    		hourlyRate:this.state.hourlyRate
	    	}
	    	updateCaregiverProfile(caregiverInfo);
	    }   
	}
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
		                          <input type="text" className="form-control" id="firstname" value = {this.props.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label for="lastName">Last name</label>
		                          <input type="text" className="form-control" id="lastName" value = {this.props.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>
		                        </div>
		                        {!(this.props.type==="customer") ?
		                        	<div className="form-group">
			                          <label for="hourlyRate">Hourly rate</label>
			                          <input type="text" className="form-control" id="hourlyRate" value = {this.props.caregiver.hourlyRate}onChange={(e) => this.setState({hourlyRate: e.target.value})}/>
			                        </div>
		                    		:
		                    		<div></div>
		                    	}

		                    </div>
		                    {!(this.props.type==="customer") ?
		                    	<div className="col-md-6 form-column">
			                        <div className="form-group">
			                          <label for="location">Location</label>
			                          <input type="text" className="form-control" id="location" value = {this.props.location} onChange={(e) => this.setState({location: e.target.value})}/>
			                        </div>
			                        
			                        <div className="form-group">
			                          <label for="education">Education</label>
			                          <input type="text" className="form-control" id="education" value = {this.props.caregiver.education} onChange={(e) => this.setState({education: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
			                          <label for="experience">Experience</label>
			                          <input type="number" className="form-control" id="experience" value = {this.props.caregiver.experience} onChange={(e) => this.setState({experience: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
			                          <label for="languages">Languages</label>
			                          <input type="text" className="form-control" id="languages" value = {this.props.caregiver.languages} onChange={(e) => this.setState({languages: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
			                          <label for="othernotes">Other notes</label>
			                          <input type="text" className="form-control" id="othernotes" value = {this.props.caregiver.otherNotes}onChange={(e) => this.setState({otherNotes: e.target.value})}/>
			                        </div>
				                </div>
			                    :
			                    <div className="col-md-6 form-column">
			                        <div className="form-group">
			                          <label for="location">Location</label>
			                          <input type="text" className="form-control" id="location" value = {this.props.location} onChange={(e) => this.setState({location: e.target.value})}/>
			                        </div>
				                </div>
		                    }
		                   
		                </div>
		                <h3></h3>
		                {!(this.props.type=="customer") ?
			                <div className="form-group">
			                  <label for="comment">About</label>
			                  <textarea className="form-control" rows="5" id="comment" value={this.props.caregiver.about}onChange={(e) => this.setState({about: e.target.value})}></textarea>
			                </div>
			            :
			            	<div></div>
			            }
		                <button type="submit" className="btn btn-primary form-btn" onClick={this.save}>Save</button>

		            </form>
		        </div>
		    </div>
        );
    }
}

export default Profile;