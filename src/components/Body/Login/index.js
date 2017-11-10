import React, { Component } from 'react';

import logo2 from '../../../images/logo2.png';
import {login} from '../../../api/api'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            alert: false
        }

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e){
        e.preventDefault();
        login({
            email: this.state.email,
            password: this.state.password 
        }).then(json => {
            console.log(json);
            window.location.href = "dashboard";
	    }).catch(err => {
	        this.setState({
                email: "",
                password: "",
                alert: true
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
                <h4 className="text-center">Log into HLO</h4>
                <form className="login">
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.formSubmit}>Login</button>
                    <div className={classes}>
                        <strong>Log in failed!</strong> Please try again.
                    </div>
                </form>
                <div className="login-links">
                    <a href="#">Don't have an account? Sign up.</a>
                    <br/>
                    <a href="#">Forgot your password?</a>
                    <br/>
                    <a href="#">Forgot your email?</a>
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

export default Login;