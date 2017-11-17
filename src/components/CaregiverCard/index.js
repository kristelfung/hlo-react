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
    var id = this.props.id;
    if(this.props.type ==="caregiver"){
        
        return (
          <div className="caregiver-card">
            <Route path="profile/:id">
                <span className="link-spanner"></span>
            </Route>
            <img src={placeholder} className="card-dp"/>
            <div className="card-desc">
                <h4>{this.props.firstName} {this.props.lastName}</h4>
                <Stars stars={this.props.stars} />
                <p>
                    <span className="label label-success">Wan Cahi</span>
                    <span className="label label-success">Central</span>
                </p>
                <p className="card-about">{this.props.about}</p>
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