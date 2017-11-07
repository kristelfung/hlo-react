import React, { Component } from 'react';

class Plan extends Component {
    render(){
        return (
            <div className={this.props.features.classes}>
                <h5>{this.props.features.name}</h5>
                <div className="price-box">
                    <span className="dollar">HK$</span>
                    <span className="per-month">/mo</span>
                    <h2 className="price-label">{this.props.features.price}</h2>
                </div>
                    <h5 className="commissions">{this.props.features.commission}% commissions</h5>
                <hr/>
                <div className="plan-features">
                    <p>{this.props.features.featureOne}</p>
                    <p>{this.props.features.featureTwo}</p>
                    <p>HK$10M Insurance</p>
                    <p>Guarenteed payment</p>
                </div>
                <a className="btn btn-primary" href="#" role="button">Sign up</a>
            </div>
        );
    }
}

export default Plan;