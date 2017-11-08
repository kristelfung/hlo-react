import React, { Component } from 'react';
import Jobs from './Jobs'
import Messages from './Messages';
import Profile from './Profile';
import Settings from './Settings';
class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab:"jobs"
		}
	}
    render(){
    	var body; 
    	var title;
    	if(this.state.tab == "jobs"){
    		body = <Jobs />;
    		title = 
    		<div>
    			<div className="col-xs-3 active">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src="/images/dashboard/suitcase.png" className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src="images/dashboard/messages.png" className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src="images/dashboard/profile.png" className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src="images/dashboard/settings.png" className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    		
    	}
    	else if(this.state.tab == "messages"){
    		body = <Messages />;
    		title = 
    		<div>
    			<div className="col-xs-3 ">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src="/images/dashboard/suitcase.png" className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3 active">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src="images/dashboard/messages.png" className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src="images/dashboard/profile.png" className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src="images/dashboard/settings.png" className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    	}
    	else if(this.state.tab == "profile"){
    		body = <Profile />;
    		title = 
    		<div>
    			<div className="col-xs-3 ">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src="/images/dashboard/suitcase.png" className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src="images/dashboard/messages.png" className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3 active">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src="images/dashboard/profile.png" className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src="images/dashboard/settings.png" className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    	}
    	else if (this.state.tab == "settings") {
    		body = <Settings />;
    		title = 
    		<div>
    			<div className="col-xs-3 ">
		            <span onClick={() => {this.setState({ tab: "jobs" })}}>
		                <img src="/images/dashboard/suitcase.png" className="dashboard-logo" />
		                <p>Jobs</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
		            <span onClick={() => {this.setState({ tab: "messages" })}}>
		                <img src="images/dashboard/messages.png" className="dashboard-logo" />
		                <p>Messages</p>
		            </span>
	            </div>
	            <div className="col-xs-3">
	            	<span onClick={() => {this.setState({ tab: "profile" })}}>
	                	<img src="images/dashboard/profile.png" className="dashboard-logo" />
	                	<p>Profile</p>
	                </span>
	            </div>
	            <div className="col-xs-3 active">
	            	<span onClick={() => {this.setState({ tab: "settings" })}}>
		                <img src="images/dashboard/settings.png" className="dashboard-logo" />
		                <p>Settings</p>
	               	</span>
	            </div>
	         </div>
    	}
    	console.log(this.state.tab);
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