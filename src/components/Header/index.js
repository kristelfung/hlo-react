import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <h1>Dashboard</h1>
                            <h5>Manage caregivers, job postings, and messages.</h5>
                        </div>
                        <div className="col-xs-6 header-image-col">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
