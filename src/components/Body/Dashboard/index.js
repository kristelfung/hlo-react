import React, { Component } from 'react';
import Jobs from './Jobs'
import Messages from './Messages';
import MessageBody from './Messages/MessageBody'
import Profile from './Profile';
import Settings from './Settings';

import {getUser, replyMessage, getThread} from '../../../api/api'

import suitcase from '../../../images/dashboard/suitcase.png'
import messages from '../../../images/dashboard/messages.png'
import profile from '../../../images/dashboard/profile.png'
import settings from '../../../images/dashboard/settings.png'

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab: "jobs",
			data: {
				"firstName": "",
				"lastName": "",
				"location": [],
				caregiver: [{
					"hourlyRate": 0,
					"car": false,
					"backgroundCheck": true,
					"education": "",
					"experience": "",
					"languages": [],
					"about": "",
					"availability": {},
					"otherNotes": ""
				}],
				email: "",
				hkidPassport: "",
				phoneNumber: "",
				creditCard: "",
				cif: "",
				bankName: "",
				accountNumber: "",
				paypal: ""
			},
			loadMessageBody: false,
			messageBody: {}
		}

<<<<<<< HEAD
		this.userID = "5a03674aa72b45c41e227f11";

=======
		//this.userID = "5a02e6ad1b6645cc36d31df0"; //kanak
		this.userID = "59e3c1b3564ae448425cd88e"; //customer rachit
		//this.userID = "59e3c34a564ae448425cd890"; //caregiver rachit
>>>>>>> 2c1fe31b57222ce1f74f16143815bae9a773cefa
	    getUser(this.userID).then(json => {
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
		
		this.reply = this.reply.bind(this);		
		this.loadMessage = this.loadMessage.bind(this);
		this.resetMessageTab = this.resetMessageTab.bind(this);
    }

	loadMessage(message){
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
					messageBody: json,
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
    		body = <Jobs {...this.state.data}/>;
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
				body = <MessageBody reply={this.reply} userID={this.userID} {...this.state.messageBody} />;
			}else{
				body = <Messages loadMessage={this.loadMessage}/>;
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