import React, { Component } from 'react';
import {signup} from '../../../api/api'

import logo2 from '../../../images/logo2.png';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            rptPassword: "",
            type: "customer",
            alert: false,
            alertText: ""
        }

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e){
        e.preventDefault();
        
        if(this.state.password !== this.state.rptPassword){
            this.setState({
                alert: true,
                alertText: "Passwords don't match!"
            });
            return;
        }

        signup({
            email: this.state.email,
            password: this.state.password,
            type: this.state.type,
        }).then(json => {
            console.log(json);
            window.location.href = "login";
	    }).catch(err => {
            console.log(err);
	        this.setState({
                email: "",
                password: "",
                rptPassword: "",
                alert: true,
                alertText: "Email already registered!"                
            });
            setInterval(() => this.setState({alert: false}), 2000);
		});
    }
    render(){
        const classes = this.state.alert ? 'alert alert-danger show-alert' : 'alert alert-danger hide-alert'        
        return(
            <div className="row">
                <div className="col-sm-7 login-column">
                    <img src={logo2} className="login-logo"/>
                    <h4 className="text-center">Sign up for HLO</h4>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpwd">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmpwd" value={this.state.rptPassword} onChange={e => this.setState({rptPassword: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label className="radio-inline"><input type="radio" name="customer" onChange={e => this.setState({type: "customer"})}  checked={this.state.type === "customer"}/>Customer</label>
                            <label className="radio-inline"><input type="radio" name="caregiver" onChange={e => this.setState({type: "caregiver"})} checked={this.state.type === "caregiver"}/>Caregiver</label>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={this.formSubmit}>Sign Up</button>
                        <div className={classes}>
                            <strong>{this.state.alertText}</strong> Please try again.
                        </div>
                    </form>
                    <div className="login-links">
                        <a href="#">Already have an account? Sign in.</a>
                    </div>
                </div>
                <div className="col-sm-5 why-hlo">
                    <div className="why-hlo-desc">
                        <h3>Why HealthyLovedOnes?</h3>
                        <p><i className="fa fa-heart" aria-hidden="true"></i> Receive Tender Loving Care from Caregivers</p>
                        <p><i className="fa fa-heart" aria-hidden="true"></i> Guarenteed payment</p>
                        <p><i className="fa fa-heart" aria-hidden="true"></i> Insurance covered</p>
                        <p><i className="fa fa-heart" aria-hidden="true"></i> Join a community of people with big hearts</p>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Signup;