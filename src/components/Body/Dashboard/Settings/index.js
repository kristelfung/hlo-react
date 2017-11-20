import React, { Component } from 'react';

import {updateSettings} from '../../../../api/api'

class Settings extends Component {
	constructor(props){
        super(props);

    	this.state = {
    		email :this.props.email,
    		password:this.props.password,
    		cPassword:this.props.password,
    		phone:this.props.phoneNumber,
    		hkid:this.props.hkidPassport,
    		cc:this.props.creditCard,
    		cif:this.props.cif,
    		bank:this.props.bankName,
    		account:this.props.accountNumber,
    		paypal:this.props.paypal
    	}
    	this.save = this.save.bind(this);

    }
	save(e){
	    //e.preventDefault();
	    let information = {
    		id: this.props.id,
    		email :this.state.email,
    		password:this.state.password,
    		cPassword:this.state.cPassword,
    		phoneNumber:this.state.phone,
    		hkidPassport:this.state.hkid,
    		creditCard:this.state.cc,
    		cif:this.state.cif,
    		bankName:this.state.bank,
    		accountNumber:this.state.account,
    		paypal:this.state.paypal
	    }
	    updateSettings(information);
	}
    render(){
			console.log(this.props);
			console.log(this.state);
        return (
        	<div className="dashbody">
		        <div className="container-small">
		            <form>
		                <div className="row">
		                    <div className="col-sm-6 form-column">
		                        <h3 className="form-title">Account</h3>
		                        <div className="form-group">
		                          <label htmlFor="email">Email</label>
		                          <input type="email" className="form-control" id="email" value={this.state.email}onChange={(e) => this.setState({email: e.target.value})}/>
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
		                          <input type="text" className="form-control" id="phone"  value={this.state.phone}onChange={(e) => this.setState({phone: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="hkid">HKID</label>
		                          <input type="text" className="form-control" id="hkid"  value={this.state.hkid}onChange={(e) => this.setState({hkid: e.target.value})}/>
		                        </div>

		                    </div>
		                    <div className="col-sm-6 form-column">
		                        <h3 className="form-title">Payment</h3>
		                        <div className="form-group">
		                          <label htmlFor="creditcard">Credit card</label>
		                          <input type="text" className="form-control" id="creditcard"   value={this.state.cc}onChange={(e) => this.setState({cc: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="cif">CIF</label>
		                          <input type="text" className="form-control" id="cif"  value={this.state.cif}onChange={(e) => this.setState({cif: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="bankname">Bank name</label>
		                          <input type="text" className="form-control" id="bankname"   value={this.state.bank}onChange={(e) => this.setState({bank: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="accnum">Account number</label>
		                          <input type="text" className="form-control" id="accnum"   value={this.state.account}onChange={(e) => this.setState({account: e.target.value})}/>
		                        </div>
		                        <div className="form-group">
		                          <label htmlFor="paypal">PayPal</label>
		                          <input type="text" className="form-control" id="paypal"  value={this.state.paypal}onChange={(e) => this.setState({paypal: e.target.value})}/>
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