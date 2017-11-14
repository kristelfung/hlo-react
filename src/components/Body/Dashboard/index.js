import React, { Component } from 'react';
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

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab: "jobs",
			userID: "",
			data: {
				"firstName": "",
				"lastName": "",
				"location": [],
				type: "",
				caregiver: [{
					"hourlyRate": 0,
					"car": false,
					"backgroundCheck": true,
					"education": "",
					"experience": "",
					"languages": [],
					"about": "",
					"availability": {},
					"otherNotes": "",
					jobsApplied: [],
					jobsReceived: [],
				}],
				email: "",
				hkidPassport: "",
				phoneNumber: "",
				creditCard: "",
				cif: "",
				bankName: "",
				accountNumber: "",
				paypal: "",
				jobsCreated: []
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
	        console.log(json);
	        this.setState({
	            loading: false,
				data: json.data,
				userID: json.data.id
	        });
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
    	var title;
    	if(this.state.tab == "jobs"){
    		body = <Jobs updateUser={this.updateUser} {...this.state.data} userID={this.state.userID}/>;
    		title = 
    		<div>
    			<div className="col-xs-3 active">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src={suitcase} className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src={messages} className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src={profile} className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src={settings} className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    		
    	}
    	else if(this.state.tab == "messages"){
			if(this.state.loadMessageBody){
				body = <MessageBody reply={this.reply} userID={this.state.userID} {...this.state.messageBody} />;
			}else{
				body = <Messages userID={this.state.userID} loadMessage={this.loadMessage}/>;
			}
    		title = 
    		<div>
    			<div className="col-xs-3 ">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src={suitcase} className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3 active">
		            <span onClick={this.resetMessageTab}>
		                <img src={messages} className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src={profile} className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src={settings} className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    	}
    	else if(this.state.tab == "profile"){
			body = <Profile {...this.state.data}/>;
    		title = 
    		<div>
    			<div className="col-xs-3 ">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src={suitcase} className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src={messages} className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3 active">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src={profile} className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src={settings} className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    	}
    	else if (this.state.tab == "settings") {
    		body = <Settings {...this.state.data}/>;
    		title = 
    		<div>
    			<div className="col-xs-3 ">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src={suitcase} className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src={messages} className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src={profile} className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3 active">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src={settings} className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    	}
    	
        return (
            <div>
               <div className="header">
			        <div className="container">
			            <div className="row">
			                <div className="col-xs-6">
			                    <h1>Dashboard</h1>
			                    <h5>Manage caregivers, job postings, and messages.</h5>
			                </div>
			                <div className="col-xs-6 header-image-col">
			                    <img src="images/infopage/pluses.png" className="header-image" />
			                    
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="container-small dashbar">
			        <div className="row text-center">
			            {title}
			        </div>
			    </div> 
			    {body}
            </div>
        );
    }
}

export default Dashboard;