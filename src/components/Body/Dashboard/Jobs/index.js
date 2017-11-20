import React, { Component } from 'react';
import {Collapse} from 'react-bootstrap';
import Select from 'react-select';
import update from 'react-addons-update';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

import {getUser, saveJob, getJobData, hireCaregiver} from '../../../../api/api';

class Jobs extends Component {
	constructor(props){
        super(props);
        this.emptyJob = {
            name:"",
            gender:"Male",
            dateOfBirth:"",
            hkidPassport:"",
            phoneNumber:"",
            email:"",
            address:"",
            district:"Central",
            country:"Hong Kong",
            languages:[],
            hobbies:"",
            description:"",
            day:"",
            startTime:"",
            endTime:"",
            requiredTimes : [],
            profile:"",
            cover:"",
            lovedOnesDescription: "",
            duration: "Long Term",
            specialMedical: "",
            tab:"detail",
            typeOfCaregiver: [],
            professionalServices: [],
            personalServices: [],
            createdBy:"", 
            completed: ""
        }
        this.state = {
            type: props.type,
            data: {
                jobsApplied: props.jobsApplied === undefined ? [] : props.jobsApplied,
                jobsReceived: props.jobsReceived === undefined ? [] : props.jobsReceived,
                jobsCreated: props.jobsCreated === undefined ? [] : props.jobsCreated
            },
            loading: true,
            isJobAdd:false,
            ...this.emptyJob
        }

        this.times = [];
        for(var i = 0; i < 24; i++){
            this.times.push({ value: i.toString().padStart(2, "0") + ":00", label:  i.toString().padStart(2, "0") + ":00"});
            this.times.push({ value: i.toString().padStart(2, "0") + ":30", label:  i.toString().padStart(2, "0") + ":30"});
        }

        this.days = [
            {value: 'Monday', label: 'Monday'},
            {value: 'Tuesday', label: 'Tuesday'},
            {value: 'Wednesday', label: 'Wednesday'},
            {value: 'Thursday', label: 'Thursday'},
            {value: 'Friday', label: 'Friday'},
            {value: 'Saturday', label: 'Saturday'},
            {value: 'Sunday', label: 'Sunday'}
        ];

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
        this.handleChange = this.handleChange.bind(this);
        this.logChange = this.logChange.bind(this);
        this.logProfessionalServices = this.logProfessionalServices.bind(this);
        this.logPersonalServices = this.logPersonalServices.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.type === "caregiver"){
            this.setState({
                type: nextProps.type,
                data: {
                    jobsApplied: nextProps.caregiver.jobsApplied,
                    jobsReceived: nextProps.caregiver.jobsReceived
                }
            });
        }
        else{
            this.setState({
                type: nextProps.type,
                data: {
                    jobsCreated: nextProps.jobsCreated
                }
            });
        }
        this.save = this.save.bind(this);
        this.add = this.add.bind(this);
    }

    add(){
        let reqTime = {
            day:this.state.day,
            startTime:this.state.startTime,
            endTime:this.state.endTime
        }
        this.setState({requiredTimes: this.state.requiredTimes.concat([reqTime]), day:"",startTime:"",endTime:""});
    }        

    save(){
        let info = {
            name: this.state.name,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            hkidPassport: this.state.hkidPassport,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            district: this.state.district,
            country: this.state.country,
            languages: JSON.stringify(this.state.languages.map(language => language.value)),
            hobbies: this.state.hobbies,
            description: this.state.description,
            lovedOnesDescription: this.state.lovedOnesDescription,
            duration: this.state.duration,
            requiredTimes: JSON.stringify(this.state.requiredTimes),
            specialMedical: JSON.stringify(this.state.specialMedical.split(',').map(special => special.trim())),
            typeOfCaregiver: JSON.stringify(this.state.typeOfCaregiver),
            professionalServices: JSON.stringify(this.state.professionalServices),
            personalServices: JSON.stringify(this.state.personalServices),
            createdBy: this.props.userID
        }
        let coverPic = this.state.cover;
        let profilePic = this.state.profile;
        saveJob(info, coverPic, profilePic);
        this.setState({data: { jobsApplied: [], jobsReceived: [], jobsCreated: [] },loading: true, isJobAdd:false, ...this.emptyJob, tab:"detail"});
        setTimeout(() => this.props.updateUser(), 1000);
    }

    handleChange(id){
        var index = this.state.typeOfCaregiver.indexOf(id);
        if(index===-1){
            this.setState({ typeOfCaregiver: this.state.typeOfCaregiver.concat(["vc"])});
        }
        else{
            this.setState({typeOfCaregiver: update(this.state.typeOfCaregiver, {$splice: [[index, 1]]})});
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

    render(){
        var body;
        var title;
        if(this.state.tab==="detail"){
            body = <div id="details" className="tab-pane fade in active">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="length">Duration</label>
                                    <select className="form-control" id="length" value = {this.state.duration}onChange={(e) => this.setState({duration: e.target.value})}>
                                        <option>Long term</option>
                                        <option>Short term</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Name</label>
                                    <input type="text" className="form-control" id="location" placeholder="This is also the title of your job!" value = {this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <Select
                                        options={[{value: "Male", label: "Male"}, {value: "Female", label: "Female"}]}
                                        id="gender" 
                                        placeholder="Gender"
                                        value = {this.state.gender} onChange={(e) => this.setState({gender: e ? e.value : ""})}
                                    />
                                </div>
                            
                                <div className="form-group">
                                    <label htmlFor="bday">Date of Birth</label>
                                    <input type="date" className="form-control" id="bday" placeholder="DD/MM/YYY" value = {this.state.dateOfBirth} onChange={(e) => this.setState({dateOfBirth: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hkidpp">HKID/Passport</label>
                                    <input type="text" className="form-control" id="hkidpp" value = {this.state.hkidPassport} onChange={(e) => this.setState({hkidPassport: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNumber" value = {this.state.phoneNumber} onChange={(e) => this.setState({phoneNumber: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email"  value = {this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <textarea className="form-control" rows="4" id="address"  value = {this.state.address} placeholder="14A Evergreen Villa..." onChange={(e) => this.setState({address: e.target.value})}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="district">District</label>
                                    <Select options={[
                                            { value: 'Wan Chai', label: 'Wan Chai'},
                                            { value: 'Central', label: 'Central'},
                                            {value: 'Sai Wan Ho', label: 'Sai Wan Ho'},
                                            {value: 'Aberdeen', label: 'Aberdeen'},
                                            {value: 'Wan Chai', label: 'Wan Chai'},
                                            {value: 'Kwun Tong', label: 'Kwun Tong'},
                                            {value: 'Sham Shui Po', label: 'Sham Shui Po'},
                                            {value: 'San Ko Pong',label: 'San Ko Pong'},
                                            {value: 'Mongkok', label: 'Mongkok'},
                                            {value: 'Sha Tin', label: 'Sha Tin'},
                                            {value: 'Tsuen Wan', label: 'Tsuen Wan'},
                                            {value: 'Yuen Long', label: 'Yuen Long'},
                                            {value: 'Kowloon', label: 'Kowloon'},
                                            {value: 'Other', label: 'Other'}
                                        ]}
                                        id="district" 
                                        placeholder="District"
                                        value = {this.state.district} onChange={(e) => this.setState({district: e ? e.value : ""})}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <Select options={[
                                            { value: 'Hong Kong', label: 'Hong Kong'},
                                            { value: 'Singapore', label: 'Singapore'},
                                            {value: 'China', label: 'China'},
                                            {value: 'Malaysia', label: 'Malaysia'},
                                            {value: 'India', label: 'India'},
                                            {value: 'Other', label: 'Other'}
                                        ]}
                                        id="country" 
                                        placeholder="Country"
                                        value = {this.state.country} onChange={(e) => this.setState({country: e ? e.value : ""})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="languages">Languages</label>
                                    <Select options={this.languages}
                                        multi
                                        id="languages" 
                                        placeholder="Languages" 
                                        onChange={(e)=> this.setState({languages: e})}
                                        value={this.state.languages} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Hobbies</label>
                                    <textarea className="form-control" rows="2" id="hobbies" placeholder="Biking, running..." value = {this.state.hobbies} onChange={(e) => this.setState({hobbies: e.target.value})}></textarea>
                                 </div>

                            </div>
                        </div>
                        <span className="btn btn-primary next" onClick={(e) => this.setState({tab: "requirements"})}>Next</span>
                    </div>

            title = <ul className="nav nav-pills nav-justified postjob-steps"> 
                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "requirements"})}>Requirements</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "review"})}>Review</a></li>
                    </ul>
        }
        else if (this.state.tab==="requirements"){
            body =  <div id="requirements" className="tab-pane fade in active">
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
                            <label htmlFor="address">Special Medical Conditions</label>
                            <textarea className="form-control" rows="4" id="address" placeholder="ALS, diabetes, stroke..." value = {this.state.specialMedical} onChange={(e) => this.setState({specialMedical: e.target.value})}></textarea>
                        </div>
                        
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
                                        <Select
                                            options={this.days}
                                            id="recipient" 
                                            placeholder="Day"
                                            name="form-field-recipient"
                                            value = {this.state.day} onChange={(e) => this.setState({day: e ? e.value : ""})}
                                        />
                                    </div>
                                    <div className="col-xs-3">
                                        <Select
                                            options={this.times}
                                            id="recipient" 
                                            placeholder="Start Time"
                                            name="form-field-recipient"
                                            value = {this.state.startTime} onChange={(e) => this.setState({startTime: e ? e.value : ""})}
                                        />
                                    </div>
                                    <div className="col-xs-3">
                                        <Select
                                            options={this.times}
                                            id="recipient" 
                                            placeholder="End Time"
                                            name="form-field-recipient"
                                            value = {this.state.endTime} onChange={(e) => this.setState({endTime: e ? e.value : ""})}
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-1">
                                    <span className="add-time" onClick={this.add}><i className="fa fa-plus"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Job Description</label>
                            <textarea className="form-control" rows="4" id="address" placeholder="My mother is in need of..." value = {this.state.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lovedones">Describe your Loved Ones (Optional)</label>
                            <textarea className="form-control" rows="4" id="lovedones" placeholder="My mother is 88 years old..." value = {this.state.lovedOnesDescription} onChange={(e) => this.setState({lovedOnesDescription: e.target.value})}></textarea>
                        </div>

                        <span className="btn btn-default back" onClick={(e) => this.setState({tab: "detail"})}>Back</span>
                        <span className="btn btn-primary next" onClick={(e) => this.setState({tab: "photos"})}>Next</span>
                    </div>
            title=  <ul className="nav nav-pills nav-justified postjob-steps"> 
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "requirements"})}>Requirements</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "review"})}>Review</a></li>
                    </ul>
        }
        else if (this.state.tab==="photos"){
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
                        <span className="btn btn-default back" onClick={(e) => this.setState({tab: "requirements"})}>Back</span>
                        <span className="btn btn-primary next" onClick={(e) => this.setState({tab: "review"})}>Next</span>
                    </div>

            title = <ul className="nav nav-pills nav-justified postjob-steps"> 
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "requirements"})}>Requirements</a></li>
                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "review"})}>Review</a></li>
                    </ul>
        }
        else if (this.state.tab==="review"){
            body = 
            <div id="review" className="tab-pane fade in active">
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Name</h5>
                        <p>{this.state.name}</p>
                        <br/>
                        <h5>Gender</h5>
                        <p>{this.state.gender}</p>
                        <br/>
                        <h5>Date of Birth</h5>
                        <p>{this.state.dateOfBirth}</p>
                        <br />
                        <h5>Languages</h5>
                        <p>{this.state.languages.map(language => language.value).join(', ')}</p>
                    </div>
                    <div className="col-sm-6">
                        <h5>Address</h5>
                        <p>{this.state.address}</p>
                        <br />
                        <h5>District</h5>
                        <p>{this.state.district}</p>
                        <br />
                        <h5>Country</h5>
                        <p>{this.state.country}</p>
                    </div>
                </div>
                <br/>
                <h5>Job Description</h5>
                <p>{this.state.description}</p>
                <br/>
                <h5>Special Medical Conditions</h5>
                <p>{this.state.specialMedical}</p>
                <br/>
                <h5>Describe your Loved Ones</h5>
                <p>{this.state.lovedOnesDescription}</p>
                <br/>
                <h5>Work Times</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Day of Week</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.state.requiredTimes.map((time, idx)=> 
                                <tr>
                                    <td>{this.state.requiredTimes[idx].day}</td>
                                    <td>{this.state.requiredTimes[idx].startTime} - {this.state.requiredTimes[idx].endTime}</td>
                                 </tr>
                            )}
                       
                    </tbody>
                </table>

                <a className="btn btn-default back" onClick={(e) => {e.preventDefault();this.setState({tab: "photos"})}}>Back</a>
                <a className="btn btn-primary next" onClick={this.save}>Submit</a>
            </div>
            title = <ul className="nav nav-pills nav-justified postjob-steps"> 
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
                        <li ><a data-toggle="pill" onClick={(e) => this.setState({tab: "requirements"})}>Requirements</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "review"})}>Review</a></li>
                    </ul>
        }
        if(this.props.jobsCreated.hiredCaregiver){
            console.log(' caregiver hired');
            this.setState({isCaregiverHired:true});
        }
        else{
            console.log(" no caregiver hired");
        }

        if(!this.state.isJobAdd ){
            return (
                <div className="dashbody">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <h2>Listed Jobs</h2>
                            </div>
                            {(this.state.type === "customer") ?
                                <div className="col-xs-6 button-col">
                                    <a className="btn btn-primary" href="#" role="button" onClick={() => {this.setState({ isJobAdd: true })}}>Add Job</a>
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
        else{
            return (
                <div className="dashbody">
                    <div className="container-small">
                        <h3>Post a Job</h3>
                         {title}   
                        <div className="tab-content">
                            <form>
                                {body}
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}
class CaregiverHired extends Component{
    constructor(props){
        super(props);
        this.state =  {
            caregiverHired : props.caregiverHired === undefined ? [] : props.caregiverHired
        }
        getUser(this.props.caregiverHired.user).then(json => {
            this.setState({
                caregiverHired: json.data
            });
        }).catch(err => {
            console.log("err"+err);
        });
    }
    
    render(){
        console.log(this.props);
        return (
            <div>
                <div id="job2" className="job-desc">
                    <div className="hired-caregiver ">
                        <h4 className="text-center">Hired Caregiver</h4>
                        <img src="images/msg.png" className="hired-picture" />
                        <h4 className="text-center">{this.state.caregiverHired.firstName} {this.state.caregiverHired.lastName}</h4>
                        <h5 className="text-center">$ {this.props.caregiverHired.hourlyRate} per hour</h5>
                    </div>
                </div>
            </div>
        );
    }
}
class CaregiverNotHired extends Component{
    constructor(props){
        super(props);
        this.state =  {
            caregiversApplied : props.caregiversApplied === undefined ? [] : props.caregiversApplied
        }
        this.hire = this.hire.bind(this);
        console.log(this.props.caregiversApplied[0].caregiverName);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            caregiversApplied: nextProps.caregiversApplied
        });
    }    

    hire(body){
        
        // //console.log(id);
        hireCaregiver(body);
    }

    render(){
        return (
            <div>
                <div id="job1" className="job-desc">
                    <h4>Caregiver Applicants</h4>
                    <table className="table table-hover applicants">
                        <tbody>
                        {this.state.caregiversApplied.map(jobApplication=>(
                            <tr>
                                <td>
                                    <h5 className="applicant-name">{jobApplication.caregiverName}</h5>
                                    <p className="applicant-date">{jobApplication.createdAt}</p>
                                </td>
                                <td className="applicant-buttons">
                                    <a onClick={()=>this.hire({caregiverID : jobApplication.caregiver, jobID: jobApplication.job})} className="btn btn-default">Hire</a>
                                    <button href="#" className="btn btn-default">Message</button>
                                </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
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
                    <h4>{this.props.jobName}</h4> 
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
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            job: {}
        }
        this.fetchJob = this.fetchJob.bind(this);
        
    }
    
    fetchJob(){
        this.setState({ isOpen:!this.state.isOpen});
        getJobData(this.props.id).then(json => {
            this.setState({ job: json.data});    
        }).catch(err => {console.log(err)});

       
    }
    
    render(){
        var jobBody ="jb";
        if(this.state.job.hiredCaregiver ){
            jobBody = <CaregiverHired caregiverHired = {this.state.job.hiredCaregiver} />
        }
        else{
            if((this.state.job.caregiversApplied && this.state.job.caregiversApplied.length > 0) ||  
                (this.state.job.caregiversOffered && this.state.job.caregiversOffered.length > 0)
                ){
                jobBody = <CaregiverNotHired caregiversApplied = {this.state.job.caregiversApplied} caregiversOffered = {this.state.job.caregiversOffered} />    
            }
            else{
                jobBody = <div> No One applied for this job. </div>
            }
        }
        
        return (
            <div>
                <div className="row job">
                    <div onClick={this.fetchJob}>
                        <div className="col-xs-6">
                            <h4>{this.props.name}</h4> 
                        </div>
                        <div className="col-xs-6 job-left">
                            <img src="images/dashboard/confirmedjob.png" className="job-status" />
                            <span className="expand-job"><i className="fa fa-angle-down expand-job" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <Collapse in={this.state.isOpen}>
                        <div>
                            {jobBody}                    
                        </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}
export default Jobs;