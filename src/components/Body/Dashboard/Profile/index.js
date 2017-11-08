import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'
import {getUser} from '../../../../api/api'
import Dashboard from '../../Dashboard';
class Profile extends Component {
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
        console.log(this.props.userType);

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
		                          <input type="text" className="form-control" id="firstname" value = {this.state.data.firstName} />
		                        </div>
		                        <div className="form-group">
		                          <label for="lastName">Last name</label>
		                          <input type="text" className="form-control" id="lastName" value = {this.state.data.lastName} />
		                        </div>
		                        {!(this.props.userType=="customer") ?
		                        	<div class="form-group">
			                          <label for="hourlyRate">Hourly rate</label>
			                          <input type="text" class="form-control" id="hourlyRate" value = {this.state.data.hourlyRate}/>
			                        </div>
		                    	 
		                    		:
		                    		<div></div>
		                    	}

		                    </div>
		                    {!(this.props.userType=="customer") ?
		                    	<div class="col-md-6 form-column">
			                        <div class="form-group">
			                          <label for="location">Location</label>
			                          <input type="text" class="form-control" id="location" value = {this.state.data.location} />
			                        </div>
			                        
			                        <div class="form-group">
			                          <label for="education">Education</label>
			                          <input type="text" class="form-control" id="education" value = {this.state.data.education} />
			                        </div>
			                        <div class="form-group">
			                          <label for="experience">Experience</label>
			                          <input type="text" class="form-control" id="experience" value = {this.state.data.experience} />
			                        </div>
			                        <div class="form-group">
			                          <label for="languages">Languages</label>
			                          <input type="text" class="form-control" id="languages" value = {this.state.data.languages} />
			                        </div>
			                        <div class="form-group">
			                          <label for="othernotes">Other notes</label>
			                          <input type="text" class="form-control" id="othernotes" />
			                        </div>
				                </div>
			                    :
			                    <div class="col-md-6 form-column">
			                        <div class="form-group">
			                          <label for="location">Location</label>
			                          <input type="text" class="form-control" id="location" value = {this.state.data.location} />
			                        </div>
				                </div>
		                    }
		                   
		                </div>
		                <h3></h3>
		                {!(this.props.userType=="customer") ?
			                <div class="form-group">
			                  <label for="comment">About</label>
			                  <textarea class="form-control" rows="5" id="comment" value={this.state.data.about}></textarea>
			                </div>
			            :
			            	<div></div>
			            }
		                <button type="submit" class="btn btn-primary form-btn">Save</button>

		            </form>
		        </div>
		    </div>
        );
    }
}

export default Profile;