import React, { Component } from 'react';
import Plan from './Plan';

const freePlan = {
    name: "Free Plan",
    price: "0",
    commission: "10",
    classes: "col-sm-4 plan-box",
    featureOne: "Professional Certified Training"
}

const entrepreneurPlan = {
    name: "Entrepreneur Plan",
    price: "88",
    commission: "5",
    classes: "col-sm-4 entrepreneur-box",
    featureOne: "Caregivers that work more than 10 hours a week",
    featureTwo: "Professional Certified Training"
}

const partnerPlan = {
    name: "Partner Plan",
    price: "888",
    commission: "10",
    classes: "col-sm-4 plan-box",
    featureOne: "Incremental Sales",
}

class Pricing extends Component {
    render(){
        return (
            <div className="container-fluid pricings">
                <h3>Caregiver Plans</h3>
                <p>Become a social hero today and join the pink collar workforce.</p>
                <div className="row pricing-table">
                    <Plan features={freePlan}/>
                    <Plan features={entrepreneurPlan}/>
                    <Plan features={partnerPlan}/>
                </div>
                <p className="insurance">Insurance Policy: Provided by the QBE Hong Kong and Shanghai Insurance Limited. Total amount is $10 million HKD. Includes both Medical Malpractice for healthcare professional and Public Liability for private citizens. Insurance includes bodily injury, property damage, and theft. Insurance begins on April 01, 2018.</p>
            </div>
        );
    }
}

export default Pricing;