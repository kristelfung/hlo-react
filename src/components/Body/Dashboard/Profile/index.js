import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'
import {getUser} from '../../../../api/api'
import Dashboard from '../../Dashboard';
import {updateCustomerProfile} from '../../../../api/api'
import {updateCaregiverProfile} from '../../../../api/api'
import Select from 'react-select';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			firstName :"",
			lastName:"",
			hourlyRate:"",
			location:[],
			gender:"Male",
			dateOfBirth:"",
			extraCharges:"",
			edu:"",
			experience:"",
			yearexp:"",
			languages:[],
			otherNotes:"",
			address:"",
            district:"Central",
            country:"Hong Kong",languages:[],
            hobbies:"",
            description:"",
			about:"",
			profile:"",
            cover:"",
            religion:"",
			tab:"detail",
			day:"",
            startTime:"",
            endTime:"",
            requiredTimes : [{
                day:"",
                startTime:"",
                endTime:"",
            }],professionalServices: [],
            personalServices: []
		}
		this.save = this.save.bind(this);
		this.languages = [
            {value: "Arabic", label:"Arabic" },
            {value:"Armenian", label:"Armenian" },
            {value:"ASL", label:"ASL" },
            {value:"Cantonese", label:"Cantonese" },
            {value:"English", label:"English" },
            {value:"French", label:"French" },
            {value:"German", label:"German" },
            {value:"Greek", label:"Greek" },
            {value:"Hebrew", label:"Hebrew" },
            {value:"Hindi", label:"Hindi" },
            {value:"Italian", label:"Italian" },
            {value:"Korean", label:"Korean" },                              
            {value:"Mandarin", label:"Mandarin" },
            {value:"Persian", label:"Persian" },
            {value:"Polish", label:"Polish" },
            {value:"Portuguese", label:"Portuguese" },
            {value:"Russian", label:"Russian" },
            {value:"Shanghainese", label:"Shanghainese" },
            {value:"Spanish", label:"Spanish" },
            {value:"Tagalog", label:"Tagalog" },
            {value:"Urdu", label:"Urdu" }
        ];
        this.save = this.save.bind(this);
        this.add = this.add.bind(this);
        this.logChange = this.logChange.bind(this);
        this.logProfessionalServices = this.logProfessionalServices.bind(this);
        this.logPersonalServices = this.logPersonalServices.bind(this);
	}
	add(){
        let reqTime = {
            day:this.state.day,
            startTime:this.state.startTime,
            endTime:this.state.endTime
        }
        this.setState({requiredTimes: this.state.requiredTimes.concat([reqTime]), day:"",startTime:"",endTime:""});
    } 
	save(e){
	    
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
	    		education:this.state.edu,
	    		experience:this.state.experience,
	    		languages:this.state.languages,
	    		otherNotes:this.state.otherNotes,
	    		about:this.state.otherNotes,
	    		hourlyRate:this.state.hourlyRate,
	    		address:this.state.address,
	            district:this.state.district,
	            country:this.state.country,
	            languages:this.state.languages,
	            hobbies:this.state.hobbies,
	            description:this.state.description,
	            day:this.state.day,
	            startTime:this.state.startTime,
	            endTime:this.state.endTime,
	            duration: this.state.duration ,
	            specialMedical:this.state.specialMedical,
	            typeOfCaregiver: this.state.typeOfCaregiver,
	            professionalServices:this.state.professionalServices,
	            personalServices: this.state.personalServices,
	            createdBy: this.props.userID,
				gender:this.state.gender,
				dateOfBirth:this.state.dateOfBirth,
				extraCharges:this.state.extraCharges,
            	religion:this.state.religion,
            	skills: this.state.professionalServices
			}
			let coverPic = this.state.cover;
	        let profilePic = this.state.profile;
	        
	        this.setState({tab:"detail"});
	        
	    	updateCaregiverProfile(caregiverInfo);
	    }   
	}
	logChange(val) { //type of caregivers
        this.setState({ typeOfCaregiver: val});
    }

    logProfessionalServices(val){
        this.setState({ professionalServices: val});
    }

    logPersonalServices(val){
        this.setState({ personalServices: val});
    }
    logLanguages(val){
        this.setState({ languages: val});
    }
    render(){
    	var body;
    	var title;
    	if(this.props.type==="customer"){
    		body = 
    		
            <div className="col-md-6 form-column">
                <div className="form-group">
                  <label htmlFor="firstname">First name</label>
                  <input type="text" className="form-control" id="firstname" value = {this.props.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" value = {this.props.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>
                </div>
               
            	<div className="form-group">
                  <label htmlFor="hourlyRate">Hourly rate</label>
                  <input type="text" className="form-control" id="hourlyRate" value = {this.props.caregiver.hourlyRate}onChange={(e) => this.setState({hourlyRate: e.target.value})}/>
                </div>
            </div>
	       title = <div></div>         
    	}
    	else{

			if(this.state.tab=="detail"){
            	body =  <div id="details" className="tab-pane">
		                    <div className="row">
		                    	<div className="col-md-6 form-column">
			                        <div className="form-group">
			                          <label for="firstname">First name</label>
			                          <input type="text" className="form-control" id="firstname"value = {this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
			                          <label for="lastname">Last name</label>
			                          <input type="text" className="form-control" id="lastname"value = {this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
			                            <label for="gender">Gender</label>
			                            <select className="form-control" id="gender" value = {this.state.gender} onChange={(e) => this.setState({gender: e.target.value})} >
			                                <option>Male</option>
			                                <option>Female</option>
			                            </select>
			                        </div>
			                        <div className="form-group">
	                                    <label htmlFor="bday">Date of Birth</label>
	                                    <input type="date" className="form-control" id="bday" placeholder="DD/MM/YYY" value = {this.state.dateOfBirth} onChange={(e) => this.setState({dateOfBirth: e.target.value})}/>
	                                </div>
			                        <div className="form-group">
			                          <label for="hrrate">Hourly rate</label>
			                          <input type="text" className="form-control" id="hrrate" placeholder="80" value = {this.state.hourlyRate} onChange={(e) => this.setState({hourlyRate: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
			                            <label for="extra">Extra charges</label>
			                            <input type="text" className="form-control" id="extra" placeholder="0"value = {this.state.extraCharges} onChange={(e) => this.setState({extraCharges: e.target.value})}/>
			                        </div>
		                    	</div>
		                    	<div className="col-md-6 form-column">
			                        <div className="form-group">
	                                    <label htmlFor="address">Address</label>
	                                    <textarea className="form-control" rows="4" id="address"  value = {this.state.address} placeholder="14A Evergreen Villa..." onChange={(e) => this.setState({address: e.target.value})}></textarea>
	                                </div>
			                        <div className="form-group">
	                                    <label htmlFor="district">District</label>
	                                    <select className="form-control" id="district"  value = {this.state.district} onChange={(e) => this.setState({district: e.target.value})}>
	                                        <option>Central</option>
	                                        <option>Sai Wan Ho</option>
	                                        <option>Aberdeen</option>
	                                        <option>Wan Chai</option>
	                                        <option>Kwun Tong</option>
	                                        <option>Sham Shui Po</option>
	                                        <option>San Ko Pong</option>
	                                        <option>Mongkok</option>
	                                        <option>Sha Tin</option>
	                                        <option>Tsuen Wan</option>
	                                        <option>Yuen Long</option>
	                                        <option>Kowloon</option>
	                                        <option>Other</option>
	                                    </select>
	                                </div>

	                                <div className="form-group">
	                                    <label htmlFor="country">Country</label>
	                                    <select className="form-control" id="country"  value = {this.state.country} onChange={(e) => this.setState({country: e.target.value})}>
	                                        <option>Hong Kong</option>
	                                        <option>China</option>
	                                        <option>Singapore</option>
	                                        <option>Singapore</option>
	                                        <option>Malaysia</option>
	                                        <option>India</option>
	                                    </select>
	                                </div>
			                        <div className="form-group">
			                          <label for="religion">Religion</label>
			                          <input type="text" className="form-control" id="religion"value = {this.state.religion} onChange={(e) => this.setState({distreligionrict: e.target.value})}/>
			                        </div>
			                        <div className="form-group">
				                        <label htmlFor="address">Language</label>
				                        <div id="language" >
				                            <Select options={this.languages}
				                                multi
				                                onChange={(e)=> this.logLanguages(e)} 
				                                value={this.state.languages} />
				                        </div>
				                    </div>

					                <div className="form-group">
					                    <label for="hobbies">Hobbies</label>
					                    <textarea className="form-control" rows="3" id="hobbies" placeholder="Biking, painting..."></textarea>
					                </div>
					                <div className="form-group">
					                  <label for="about">About</label>
					                  <textarea className="form-control" rows="5" id="about" placeholder="I am a 30 year old nursing student..."></textarea>
					                </div>
					                <div className="submit-buttons">
					                    <a onClick={(e) => this.setState({tab: "experience"})} className="btn btn-primary">Next</a>
					                </div>
					            </div>
		                	</div>
		            	</div>

            	title = <ul className="nav nav-pills nav-justified postjob-steps"> 
	                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "experience"})}>Experience</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "services"})}>Services</a></li>
	                        <li ><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "pricing"})}>Pricing</a></li>
	                    </ul>
            }
            else if (this.state.tab=="experience"){
            	body =	
            	<div id="experience" class="tab-pane ">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="yearexp">Years of experience</label>
                                <input type="number" class="form-control" id="yearexp" value = {this.state.yearexp} onChange={(e) => this.setState({yearexp: e.target.value})}/>
                            </div>
                            <div class="form-group">
                                <label for="workexp">Work experience</label>
                                <input type="text" class="form-control" id="workexp" value = {this.state.workexp} onChange={(e) => this.setState({workexp: e.target.value})}/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="license">Licenses and Credentials</label>
                                <input type="text" class="form-control" id="license" value = {this.state.license} onChange={(e) => this.setState({license: e.target.value})}/>
                            </div>
                            <div class="form-group">
                                <label for="edu">Education History</label>
                                <input type="text" class="form-control" id="edu" value = {this.state.edu} onChange={(e) => this.setState({edu: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                    <a onClick={(e) => this.setState({tab: "detail"})} class="btn btn-default back">Back</a>
                    <a onClick={(e) => this.setState({tab: "services"})} class="btn btn-primary next">Next</a>
                </div>
                title = <ul className="nav nav-pills nav-justified postjob-steps"> 
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
	                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "experience"})}>Experience</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "services"})}>Services</a></li>
	                        <li ><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "pricing"})}>Pricing</a></li>
	                    </ul>
            }
            else if (this.state.tab=="services"){
            	body =  <div id="requirements" className="tab-pane">
                        
                        <h4>Type of Caregiver</h4>
                        <CheckboxGroup name="typeCaregivers" value = {this.state.typeOfCaregiver} onChange={this.logChange} >
                            <div className="row checkbox-collection">
                                <div className="col-sm-6">
                                    <div className="checkbox">
                                        <label><Checkbox value="Volunteer Caregivers"/>Volunteer Caregivers</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Nursing Students"/>Nursing Students</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Home Nurse"/>Home Nurse</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Eldercare"/>Eldercare</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Weekend Caregivers"/>Weekend Caregivers</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="checkbox">
                                        <label><Checkbox value="Special Needs"/> Special Needs</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Specialist Caregivers"/> Specialist Caregivers</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Expert Caregivers"/> Expert Caregivers</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="TLC Caregivers"/> TLC Caregivers</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Licensed Nurse"/> Licensed Nurse</label>
                                    </div>
                                </div>
                            </div>
                        </CheckboxGroup>
                        

                        <h4>Professional Services</h4>
                        <CheckboxGroup name="typeCaregivers" value = {this.state.professionalServices} onChange={this.logProfessionalServices} >
                            <div className="row checkbox-collection">
                                <div className="col-sm-6">
                                    <div className="checkbox">
                                        <label><Checkbox value="Addiction Counselor"/>Addiction Counselor</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Beautician"/>Beautician</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Chinese Medicine Expert"/>Chinese Medicine Expert</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Chiropractor"/>Chiropractor</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Eldercare"/>Eldercare</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Hair Stylist"/>Hair Stylist</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Licensed Nurse"/>Licensed Nurse</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Occupational Therapist"/>Occupational Therapist</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Massage Therapist"/>Massage Therapist</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="other">Other</label>
                                        <input type="text" className="form-control" id="other"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="checkbox">
                                        <label><Checkbox value="Personal Trainer"/>Personal Trainer</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Yoga Instructor"/>Yoga Instructor</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Physiotherapist"/>Physiotherapist</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Midwife"/>Midwife</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Reflexologist"/>Reflexologist</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Special Needs Therapist"/>Special Needs Therapist</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Speech Therapist"/>Speech Therapist</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Spiritual/Body/Mind Expert"/>Spiritual/Body/Mind Expert</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><Checkbox value="Sports Therapist"/>Sports Therapist</label>
                                    </div>
                                </div>
                            </div>
                        </CheckboxGroup>
                        <h4>Personal Services</h4>
                        <CheckboxGroup name="personalServices" value = {this.state.personalServices} onChange={this.logPersonalServices} >
                            <div className="row checkbox-collection">
                            <div className="col-sm-6">
                                <div className="checkbox">
                                    <label><Checkbox value="Bathing"/>Bathing</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Companionship"/>Companionship</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Exercise"/>Exercise</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Groceries and Shopping"/>Groceries and Shopping</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Grooming"/>Grooming</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Housekeeping"/>Housekeeping</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="checkbox">
                                    <label><Checkbox value="Managing Medications"/>Managing Medications</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Meal Prep"/>Meal Prep</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Transferring and Mobility"/>Transferring and Mobility</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Toileting"/>Toileting</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Transportation"/>Transportation</label>
                                </div>
                                <div className="checkbox">
                                    <label><Checkbox value="Travel Companion"/>Travel Companion</label>
                                </div>
                            </div>
                            </div>
                        </CheckboxGroup>
                        
                      
                        
                        <div className="form-group">
                            <div className="row">
                                <label className="col-xs-5 control-label">Day of Week</label>
                                <label className="col-xs-3 control-label">Time Start</label>
                                <label className="col-xs-3 control-label">Time End</label>
                                <label className="col-xs-1 control-label"></label>
                                {this.state.requiredTimes.map((time, idx) => 
                                    <div>
                                        <div className="col-xs-5">
                                            {this.state.requiredTimes[idx].day}
                                        </div>
                                        <div className="col-xs-3">
                                            {this.state.requiredTimes[idx].startTime}
                                        </div>
                                        <div className="col-xs-3">
                                            {this.state.requiredTimes[idx].endTime}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <div className="col-xs-5">
                                        <input type="text" className="form-control" value = {this.state.day} onChange={(e) => this.setState({day: e.target.value})}/>
                                    </div>
                                    <div className="col-xs-3">
                                        <input type="time" className="form-control"  value = {this.state.startTime}onChange={(e) => this.setState({startTime: e.target.value})}/>
                                    </div>
                                    <div className="col-xs-3">
                                        <input type="time" className="form-control" value = {this.state.endTime}onChange={(e) => this.setState({endTime: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="col-xs-1">
                                    <span className="add-time" onClick={this.add}><i className="fa fa-plus"></i></span>
                                </div>
                            </div>
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="lovedones">Describe yourself</label>
                            <textarea className="form-control" rows="4" id="lovedones" placeholder="My mother is 88 years old..." value = {this.state.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
                        </div>

                        <span className="btn btn-default back" onClick={(e) => this.setState({tab: "experience"})}>Back</span>
                        <span className="btn btn-primary next" onClick={(e) => this.setState({tab: "photos"})}>Next</span>
                    	</div>
                title=  <ul className="nav nav-pills nav-justified postjob-steps"> 
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "experience"})}>Experience</a></li>
	                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "services"})}>Services</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "pricing"})}>Pricing</a></li>
	                    </ul>
            }
            else if (this.state.tab=="photos"){
            	body = <div id="photos" className="tab-pane fade in active">
                        <h4>Profile Picture</h4>

                        <div className="form-group">
                            <input type="file" name="profile" id="profile" className="inputfile" onChange={(e) => this.setState({profile: e.target.files[0]})}/>
                            <label htmlFor="profile" className="btn btn-default">Upload Profile Picture</label>
                        </div>
                        <br/>
                        <h4>Cover Photo</h4>
                        <div className="form-group">
                            <input type="file" name="cover" id="cover" className="inputfile" onChange={(e) => this.setState({cover: e.target.files[0]})}/>
                            <label htmlFor="cover" className="btn btn-default">Upload Cover Photo</label>
                        </div>
                        <span className="btn btn-default back" onClick={(e) => this.setState({tab: "services"})}>Back</span>
                        <span className="btn btn-primary next" onClick={(e) => this.setState({tab: "pricing"})}>Next</span>
                    </div>

       			 title = <ul className="nav nav-pills nav-justified postjob-steps"> 
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "experience"})}>Experience</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "services"})}>Services</a></li>
	                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "pricing"})}>Pricing</a></li>
	                    </ul>

            }
            else if (this.state.tab=="pricing"){
            	body=<div id="pricing" class="tab-pane">
                    <div class="radio">
                        <label><input type="radio" name="optradio"/>Free Plan - 0$/mo</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="optradio"/>Entrepreneur Plan - 88$/mo</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="optradio"/>Partner Plan - 888$/mo</label>
                    </div>
                    <a onClick={(e) => this.setState({tab: "photos"})} class="btn btn-default back">Back</a>
                    <a className="btn btn-primary next" onClick={this.save}>Submit</a>
                </div>
                title = <ul className="nav nav-pills nav-justified postjob-steps"> 
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "experience"})}>Experience</a></li>
	                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "services"})}>Services</a></li>
	                        <li ><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
	                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "pricing"})}>Pricing</a></li>
	                    </ul>
            }

        
    	}
        return (
        	<div className="dashbody">
		        <div className="container-small">
		            <form>
		                <div className="row">
		                    <h3 className="form-title">Basic Information</h3>
		                    	{title}
        						{body}
        				</div>
		                <h3></h3>
		                
		            </form>
		        </div>
			</div>
        );
    }
}

export default Profile;