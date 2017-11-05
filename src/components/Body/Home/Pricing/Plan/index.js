import React, { Component } from 'react';

import Button from '../../../../Button';

class Plan extends Component {
    render(){
        return (
            <div class={this.props.features.classes}>
                <h5>{this.props.features.name}</h5>
                <div class="price-box">
                    <span class="dollar">HK$</span>
                    <span class="per-month">/mo</span>
                    <h2 class="price-label">{this.props.features.price}</h2>
                </div>
                    <h5 class="commissions">{this.props.features.commission}% commissions</h5>
                <hr/>
                <div class="plan-features">
                    <p>{this.props.features.featureOne}</p>
                    <p>{this.props.features.featureTwo}</p>
                    <p>HK$10M Insurance</p>
                    <p>Guarenteed payment</p>
                </div>
                <a class="btn btn-primary" href="#" role="button">Sign up</a>
            </div>
        );
    }
}

export default Plan;