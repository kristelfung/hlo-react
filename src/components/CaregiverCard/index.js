import React, { Component } from 'react';
import placeholder from '../../images/placeholders/dp.jpg'; 
import Stars from '../Stars/Stars';
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom';
class CaregiverCard extends Component {
  render() {
    let caregiverInfo = this.props.caregiver[0];
    let stars = [];
    for (var i=0; i < Math.floor(caregiverInfo.stars); i++) {
        stars.push(<i className="fa fa-star" aria-hidden="true" ></i>);
    }
    if(caregiverInfo.stars - i > 0){
        stars.push(<i className="fa fa-star-half-o" aria-hidden="true" ></i>);
    }
    for (var i=0; i < 5-Math.ceil(caregiverInfo.stars); i++) {
        stars.push(<i className="fa fa-star-o" aria-hidden="true" ></i>);
    }

    var id = this.props.id;
    if(this.props.type ==="caregiver"){
        return (
          <div className="caregiver-card">
            <a href={"/profile/"+id}>
                <span className="link-spanner"></span>
            </a>
            <img src={placeholder} className="card-dp"/>
            <div className="card-desc">
                <h4>{this.props.firstName} {this.props.lastName}</h4>
                {stars} 
                <p>
                    {
                        this.props.location.map(l => <span className="label label-success">{l}</span>)
                    }
                </p>
                <p className="card-about">{caregiverInfo.about}</p>
            </div>
          </div>
        );
    }
    else if(this.props.type==="job"){
        return (
            <div className="caregiver-card">
                <Route path="profile/:id">
                    <span className="link-spanner"></span>
                </Route>
                <img src={placeholder} className="card-dp"/>
                <div className="card-desc">
                    <h4>{this.props.name} </h4>
                    <p>
                        {this.props.gender}
                    </p>
                    <p>
                        <span className="label label-success"></span>
                        <span className="label label-success">Central</span>
                    </p>
                    <p className="card-about">{this.props.about}</p>
                </div>
            </div>
        );
    }
  }
}

export default CaregiverCard;