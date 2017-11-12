import React, { Component } from 'react';
import {getUser, getListedJobs, saveJob, savePhotos} from '../../../../api/api';

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
            loading: true,
            isJobAdd:false,
            
            name:"",
            gender:"",
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
            requiredTimes : [{
                day:"",
            startTime:"",
            endTime:"",
            }],
            profile:"",
            cover:"",
            
            tab:"detail"
        }
		this.save = this.save.bind(this);
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

                loading: false,
                error: err
            });
        });
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

                type: nextProps.type,
                data: {
                    jobsCreated: nextProps.jobsCreated
                }
            })
        }        

    }
    save(){
        let info = {
            name:this.state.name,
            gender:this.state.gender,
            dateOfBirth:this.state.dateOfBirth,
            hkidPassport:this.state.hkidPassport,
            phoneNumber:this.state.phoneNumber,
            email:this.state.email,
            address:this.state.address,
            district:this.state.district,
            country:this.state.country,
            languages:this.state.languages,
            hobbies:this.state.hobbies,
            description:this.state.description,
            day:this.state.day,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            profile:this.state.profile,
            cover:this.state.cover
        }
        saveJob(info);
        savePhotos();
    }

    render(){
        var body;
        var title;
        if(this.state.tab=="detail"){
            body = <div id="details" className="tab-pane fade in active">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="location">Name</label>
                                    <input type="text" className="form-control" id="location" placeholder="This is also the title of your job!" value = {this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label for="gender">Gender</label>
                                    <select className="form-control" id="gender"  value = {this.state.gender}onChange={(e) => this.setState({gender: e.target.value})}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            
                                <div className="form-group">
                                    <label for="bday">Date of Birth</label>
                                    <input type="date" className="form-control" id="bday" placeholder="DD/MM/YYY" value = {this.state.dateOfBirth} onChange={(e) => this.setState({dateOfBirth: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label for="hkidpp">HKID/Passport</label>
                                    <input type="text" className="form-control" id="hkidpp" value = {this.state.hkidPassport} onChange={(e) => this.setState({hkidPassport: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label for="phoneNumber">Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNumber" value = {this.state.phoneNumber} onChange={(e) => this.setState({phoneNumber: e.target.value})}/>
                                </div>

                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email"  value = {this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="address">Address</label>
                                    <textarea className="form-control" rows="4" id="address"  value = {this.state.address} placeholder="14A Evergreen Villa..." onChange={(e) => this.setState({address: e.target.value})}></textarea>
                                </div>

                                <div className="form-group">
                                    <label for="district">District</label>
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
                                    <label for="country">Country</label>
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
                                    <label for="languages">Languages</label>
                                    <input type="text" className="form-control" id="languages" placeholder="Comma seperated" value = {this.state.languages.join(',')} onChange={(e) => this.setState({languages: e.target.value.split(',')})}/>
                                </div>

                                <div className="form-group">
                                    <label for="address">Hobbies</label>
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
        else if (this.state.tab=="requirements"){
            body =  <div id="requirements" className="tab-pane fade in active">
                        <div className="form-group">
                            <label for="address">Job Description</label>
                            <textarea className="form-control" rows="4" id="address" placeholder="My mother is in need of..." value = {this.state.description} onChange={(e) => this.setState({description: e.target.value})}></textarea>
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
        else if (this.state.tab=="photos"){
            body = <div id="photos" className="tab-pane fade in active">
                        <h4>Profile Picture</h4>

                        <div class="form-group">
                            <input type="file" name="profile" id="profile" class="inputfile" onChange={(e) => this.setState({profile: e.target.value})}/>
                            <label for="profile" class="btn btn-default">Upload Profile Picture</label>
                        </div>
                        <br/>
                        <h4>Cover Photo</h4>
                        <div class="form-group">
                            <input type="file" name="cover" id="cover" class="inputfile" onChange={(e) => this.setState({cover: e.target.value})}/>
                            <label for="cover" class="btn btn-default">Upload Cover Photo</label>
                        </div>
                        <span class="btn btn-default back" onClick={(e) => this.setState({tab: "requirements"})}>Back</span>
                        <span class="btn btn-primary next" onClick={(e) => this.setState({tab: "review"})}>Next</span>
                    </div>

            title = <ul className="nav nav-pills nav-justified postjob-steps"> 
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "requirements"})}>Requirements</a></li>
                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "review"})}>Review</a></li>
                    </ul>
        }
        else if (this.state.tab=="review"){
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
                        <p>{this.state.languages.join(', ')}</p>
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
                <h5>Work Times</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Day of Week</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sunday</td>
                            <td>10:00 AM - 3:00 PM</td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                             <td>10:00 AM - 3:00 PM</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>10:00 AM - 3:00 PM</td>
                        </tr>
                    </tbody>
                </table>

                <a class="btn btn-default back" onClick={(e) => {e.preventDefault();this.setState({tab: "photos"})}}>Back</a>
                <a class="btn btn-primary next" onClick={this.save}>Submit</a>
            </div>
            title = <ul className="nav nav-pills nav-justified postjob-steps"> 
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "detail"})}>Details</a></li>
                        <li ><a data-toggle="pill" onClick={(e) => this.setState({tab: "requirements"})}>Requirements</a></li>
                        <li><a data-toggle="pill" onClick={(e) => this.setState({tab: "photos"})}>Photos</a></li>
                        <li className="active"><a data-toggle="pill" onClick={(e) => this.setState({tab: "review"})}>Review</a></li>
                    </ul>
        }
        console.log(this.props.type);
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
class CustomerJob extends Component{
    render(){
        return (

            <div className="row job">
                <div className="col-xs-6">
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