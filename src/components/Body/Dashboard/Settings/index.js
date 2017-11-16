import React, { Component } from 'react';

import {getProfile, updateSettings} from '../../../../api/api'

class Settings extends Component {
	constructor(props){
        super(props);

    	this.state = {
    		email :"",
    		password:"",
    		cPassword:"",
    		phone:"",
    		hkid:"",
    		cc:"",
    		cif:"",
    		bank:"",
    		account:"",
    		paypal:""
    	}
    	this.save = this.save.bind(this);

    }
	save(e){
	    e.preventDefault();
	    let information = {
    		id: this.props.id,
    		email :this.state.email,
    		password:this.state.password,
    		cPassword:this.state.cPassword,
    		phone:this.state.phone,
    		hkid:this.state.hkid,
    		cc:this.state.cc,
    		cif:this.state.cif,
    		bank:this.state.bank,
    		account:this.state.account,
    		paypal:this.state.paypal
	    }
	    updateSettings(information);
	}
    render(){
        return (
        	<div className="dashbody">
		        <div className="container-small">
		            <form>
		                <div className="row">
		                    <div className="col-sm-6 form-column">
		                        <h3 className="form-title">Account</h3>
		                        <div className="form-group">
		                          <label htmlFor="email">Email</label>
		                          <input type="email" className="form-control" id="email" placeholder="current-address@gmail.com" value={this.props.email}onChange={(e) => this.setState({email: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="pwd">Password</label>
		                          <input type="password" className="form-control" id="pwd" onChange={(e) => this.setState({password: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="pwdconfirm">Confirm password</label>
		                          <input type="password" className="form-control" id="pwdconfirm" onChange={(e) => this.setState({cPassword: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="phone">Phone</label>
		                          <input type="text" className="form-control" id="phone" placeholder="+852 0000 0000" value={this.props.phoneNumber}onChange={(e) => this.setState({phone: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="hkid">HKID</label>
		                          <input type="text" className="form-control" id="hkid" placeholder="XXXXXXX(X)" value={this.props.hkidPassport}onChange={(e) => this.setState({hkid: e.target.value})}/>
		                        </div>

		                    </div>
		                    <div className="col-sm-6 form-column">
		                        <h3 className="form-title">Payment</h3>
		                        <div className="form-group">
		                          <label htmlFor="creditcard">Credit card</label>
		                          <input type="text" className="form-control" id="creditcard" placeholder="xxxx-xxxx-xxxx-xxxx"  value={this.props.creditCard}onChange={(e) => this.setState({cc: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="cif">CIF</label>
		                          <input type="text" className="form-control" id="cif" placeholder="xxx" value={this.props.cif}onChange={(e) => this.setState({cif: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="bankname">Bank name</label>
		                          <input type="text" className="form-control" id="bankname" placeholder="HSBC"  value={this.props.bankName}onChange={(e) => this.setState({bank: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="accnum">Account number</label>
		                          <input type="text" className="form-control" id="accnum" placeholder="xxxx-xxxx-xxxx-xxxx"  value={this.props.accountNumber}onChange={(e) => this.setState({account: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="paypal">PayPal</label>
		                          <input type="text" className="form-control" id="paypal" placeholder="PayPal account" value={this.props.paypal}onChange={(e) => this.setState({paypal: e.target.value})}/>
		                        </div>
		                    </div>
		                </div>
		                <button type="submit" className="btn btn-primary form-btn" onClick={this.save}>Save</button>
		            </form>
		        </div>
		    </div>
        );
    }
}

export default Settings;