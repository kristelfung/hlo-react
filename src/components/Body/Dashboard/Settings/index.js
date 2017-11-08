import React, { Component } from 'react';

import {getProfile} from '../../../../api/api'

class Settings extends Component {
	constructor(props){
        super(props);
        this.state = {
            data: {
                firstName: "",
                lastName: "",
                about: "",
                availability: {},
                backgroundCheck: false,
                car: false,
                education: "",
                experience: "",
                hourlyRate: 60,
                location: [],
                otherNotes: "",
                reviews: [],
                stars: 0,
                languages: []
            },
            loading: true
        }

        getProfile("5a029e58dc5c6d379bcb9108").then(json => {
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
		                        {this.state.data.lastName}
		                          <label for="email">Email</label>
		                          <input type="email" className="form-control" id="email" placeholder="current-address@gmail.com" />
		                        </div>
		                        <div className="form-group">
		                          <label for="pwd">Password</label>
		                          <input type="password" className="form-control" id="pwd" />
		                        </div>
		                        <div className="form-group">
		                          <label for="pwdconfirm">Confirm password</label>
		                          <input type="password" className="form-control" id="pwdconfirm" />
		                        </div>
		                        <div className="form-group">
		                          <label for="phone">Phone</label>
		                          <input type="text" className="form-control" id="phone" placeholder="+852 0000 0000" />
		                        </div>
		                        <div className="form-group">
		                          <label for="hkid">HKID</label>
		                          <input type="text" className="form-control" id="hkid" placeholder="XXXXXXX(X)" />
		                        </div>

		                    </div>
		                    <div className="col-sm-6 form-column">
		                        <h3 className="form-title">Payment</h3>
		                        <div className="form-group">
		                          <label for="creditcard">Credit card</label>
		                          <input type="text" className="form-control" id="creditcard" placeholder="xxxx-xxxx-xxxx-xxxx"/>
		                        </div>
		                        <div className="form-group">
		                          <label for="cif">CIF</label>
		                          <input type="text" className="form-control" id="cif" placeholder="xxx"/>
		                        </div>
		                        <div className="form-group">
		                          <label for="bankname">Bank name</label>
		                          <input type="text" className="form-control" id="bankname" placeholder="HSBC"/>
		                        </div>
		                        <div className="form-group">
		                          <label for="accnum">Account number</label>
		                          <input type="text" className="form-control" id="accnum" placeholder="xxxx-xxxx-xxxx-xxxx"/>
		                        </div>
		                        <div className="form-group">
		                          <label for="paypal">PayPal</label>
		                          <input type="text" className="form-control" id="paypal" placeholder="PayPal account"/>
		                        </div>
		                    </div>
		                </div>
		                <button type="submit" className="btn btn-primary form-btn">Save</button>
		            </form>
		        </div>
		    </div>
        );
    }
}

export default Settings;