import React, { Component } from 'react';
import placeholder from '../../images/profile-placeholder.png'

class CaregiverCard extends Component {
  render() {
    if(this.props.loading){
        return (
            <div className="loader">Loading...</div>
        ) 
    }

    var id = this.props.id;
    let stars = [];
    for (var i=0; i < Math.floor(this.props.stars); i++) {
        stars.push(<i className="fa fa-star" aria-hidden="true" ></i>);
    }
    if(this.props.stars - i > 0){
        stars.push(<i className="fa fa-star-half-o" aria-hidden="true" ></i>);
    }
    for(i=0; i < 5-Math.ceil(this.props.stars); i++) {
        stars.push(<i className="fa fa-star-o" aria-hidden="true" ></i>);
    }

    if(this.props.type ==="caregiver"){
        return (
          <div className="caregiver-card">
            <a href={"/profile/"+id}>
                <span className="link-spanner"></span>
            </a>
            <img src={this.props.profilePicUrl === undefined || this.props.profilePicUrl === ""  ? placeholder : this.props.profilePicUrl} className="card-dp"/>
            <div className="card-desc">
                <h4>{this.props.firstName} {this.props.lastName}</h4>
                {stars} 
                <p>
                    {
                        this.props.location.map(l => <span className="label label-success">{l}</span>)
                    }
                </p>
                <p className="card-about">{this.props.about}</p>
            </div>
          </div>
        );
    }
    else if(this.props.type==="job"){
        console.log("JOB", this.props)
        return (
            <div className="caregiver-card">
                <a href={"/profile/job/"+this.props.id}>
                    <span className="link-spanner"></span>
                </a>
                <img src={placeholder} className="card-dp"/>
                <div className="card-desc">
                    <h4>{this.props.name} </h4>
                    <p>
                        {this.props.gender}
                    </p>
                    <p>
                        <span className="label label-success">{this.props.district}</span>
                    </p>
                    <p className="card-about">{this.props.description !== undefined ? (this.props.description.substring(0, 20) + (this.props.description.length > 20 ? "..." : "")) : ""}</p>
                </div>
            </div>
        );
    }
  }
}

export default CaregiverCard;