import React, { Component } from 'react';
import Header from '../../Header';
import Jobs from './Jobs'
import Messages from './Messages';
import MessageBody from './Messages/MessageBody'
import Profile from './Profile';
import Settings from './Settings';

import {getUser, replyMessage, getThread, markRead} from '../../../api/api'

import suitcase from '../../../images/dashboard/suitcase.png'
import messages from '../../../images/dashboard/messages.png'
import profile from '../../../images/dashboard/profile.png'
import settings from '../../../images/dashboard/settings.png'
import pluses from  '../../../images/infopage/pluses.png'

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab: "jobs",
			userID: "",
			data: {
				firstName: "",
				lastName: "",
				location: [],
				type: "",
				caregiver: [{
					"hourlyRate": 0,
					"car": false,
					"backgroundCheck": true,
					"education": "",
					"experience": "",
					languages: [],
					"about": "",
					"availability": {},
					"otherNotes": "",
					jobsApplied: [],
					jobsReceived: [],
					currentJobs:[],
					gender:"",
					dateOfBirth:"",
					extraCharges:"",
					address:"",
					district:"",
					country:"",
					hobbies:"",
					profile:"",
					cover:"",
					religion:"",
					day:"",
					startTime:"",
					endTime:"",
					availability : [{
						day:"",
						startTime:"",
						endTime:"",
					}],
					skills: [],
					personalServices: [],
					pricingPlan : "",
					typeOfCaregiver: [],
					license: "",
					extraCharges: 0,
					yearsOfExperience: 0,
				}],
				email: "",
				hkidPassport: "",
				phoneNumber: "",
				creditCard: "",
				cif: "",
				bankName: "",
				accountNumber: "",
				paypal: "",
				jobsCreated: [],	
			},
			loadMessageBody: false,
			messageBody: {}
		}
	    
		this.updateUser = this.updateUser.bind(this);
		this.reply = this.reply.bind(this);		
		this.loadMessage = this.loadMessage.bind(this);
		this.resetMessageTab = this.resetMessageTab.bind(this);

		this.updateUser();
	}
	
    updateUser(){
		getUser().then(json => {
	        this.setState({
	            loading: false,
				data: json.data,
				userID: json.data.id
			});
			console.log(json.data);
	    }).catch(err => {
	        console.log(err);
	        this.setState({
	            loading: false,
	            error: err
	        });
		});		
	}  

	loadMessage(message){
		markRead(message.id).then(json => {}).catch(err=>{});
		this.setState({
			loadMessageBody: true,
			messageBody: message
		});
	}

	resetMessageTab(){
		this.setState({
			loadMessageBody: false,
			messageBody: {},
			tab: "messages"
		});
	}

	reply(message){
		replyMessage(message).then(json => {
			getThread(message.thread).then(json => {
				this.setState({
					messageBody: json.data,
				});
			}).catch(err => {
				console.log(err);
			});
	    }).catch(err => {
	        console.log(err);
		});
	}

    render(){
    	var body; 
    	if(this.state.tab === "jobs"){
    		console.log(this.state.data);
    		body = <Jobs updateUser={this.updateUser} {...this.state.data} userID={this.state.userID}/>;
    	}
    	else if(this.state.tab === "messages"){
			if(this.state.loadMessageBody){
				body = <MessageBody reply={this.reply} userID={this.state.userID} {...this.state.messageBody} />;
			}else{
				body = <Messages userID={this.state.userID} loadMessage={this.loadMessage}/>;
			}
    	}
    	else if(this.state.tab === "profile"){
			body = <Profile userID={this.state.userID}  {...this.state.data}/>;
    	}
    	else if (this.state.tab === "settings") {
    		body = <Settings userID={this.state.userID}  {...this.state.data}/>;
		}

		const dashboard = {
			title: "Dashboard",
			subtitle: "Manage caregivers, job postings, and messages."
		}
    	
        return (
            <div>
               <Header header={dashboard}/>
			    <div className="container-small dashbar">
			        <div className="row text-center">
						<div>
							<div className={this.state.tab === "jobs" ? "col-xs-3 active" : "col-xs-3"}>
								<span onClick={() => {this.setState({ tab: "jobs" })}}>
									<img src={suitcase} className="dashboard-logo" />
									<p class="dashbar-text">Jobs</p>
								</span>
							</div>
							<div className={this.state.tab === "messages" ? "col-xs-3 active" : "col-xs-3"}>
								<span onClick={() => {this.setState({ tab: "messages" })}}>
									<img src={messages} className="dashboard-logo" />
									<p class="dashbar-text">Messages</p>
								</span>
							</div>
							<div className={this.state.tab === "profile" ? "col-xs-3 active" : "col-xs-3"}>
								<span onClick={() => {this.setState({ tab: "profile" })}}>
									<img src={profile} className="dashboard-logo" />
									<p class="dashbar-text">Profile</p>
								</span>
							</div>
							<div className={this.state.tab === "settings" ? "col-xs-3 active" : "col-xs-3"}>
								<span onClick={() => {this.setState({ tab: "settings" })}}>
									<img src={settings} className="dashboard-logo" />
									<p class="dashbar-text">Settings</p>
								</span>
							</div>
						</div>
			        </div>
			    </div> 
			    {body}
            </div>
        );
    }
}

export default Dashboard;