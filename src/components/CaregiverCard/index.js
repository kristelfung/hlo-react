import React, { Component } from 'react';
import placeholder from '../../images/placeholders/dp.jpg'; 

class CaregiverCard extends Component {
  render() {
    return (
      <div className="caregiver-card">
        <a href="profile/">
            <span className="link-spanner"></span>
        </a>
        <img src={placeholder} className="card-dp"/>
        <div className="card-desc">
            <h4>Jane Doe</h4>
            <p>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star" aria-hidden="true" ></i>
                <i className="fa fa-star-half-o" aria-hidden="true" ></i>
                (10)
            </p>
            <p>
                <span className="label label-success">Wan Chai</span>
                <span className="label label-success">Central</span>
            </p>
            <p className="card-about">I am a nursing student studying at HKU, living in Central. Looking for...</p>
        </div>
      </div>
    );
  }
}

export default CaregiverCard;