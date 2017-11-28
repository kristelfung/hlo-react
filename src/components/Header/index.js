import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="container">
                    <h1>{this.props.header.title}</h1>
                    <h5>{this.props.header.subtitle}</h5>
                </div>
            </div>
        );
    }
}

export default Header;
