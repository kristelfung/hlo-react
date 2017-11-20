import React, { Component } from 'react';
import moment from 'moment';

import placeholder from '../../../images/profile-placeholder.png'
import {getUser} from '../../../api/api'
import Stars from '../../Stars'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
				"firstName": "",
				"lastName": "",
				"location": [],
				caregiver: {
					"hourlyRate": 0,
					"car": false,
					"backgroundCheck": false,
					"education": "",
					"yearsOfExperience": "",
					"languages": [],
					"about": "",
                    "otherNotes": "",
                    reviews: [],
                    availability: []
				},
				email: "",
				hkidPassport: "",
				phoneNumber: "",
				creditCard: "",
				cif: "",
				bankName: "",
				accountNumber: "",
				paypal: ""
			},
            loading: true
        }

        getUser(props.match.params.id).then(json => {
            console.log(json.data)
            if(json.data.caregiver.reviews === undefined)
                json.data.caregiver.reviews = [];
            this.setState({
                loading: false,
                data: json.data
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });
    }
    render() {
        let caregiverInfo = this.state.data.caregiver;
        return (
            <div>
                <div className="container-fluid profile-cover" />
                <div className="row profile-head">
                    <div className="col-sm-3">
                        <div>
                            <img src={(this.state.data.profilePicUrl === undefined || this.state.data.profilePicUrl === "") ? placeholder : this.state.data.profilePicUrl} className="profile-pic" />
                            {/* TODO later, add favoriting feature <a href="#" className="favorite"><i className="fa fa-plus" aria-hidden="true"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-sm-6 name">
                        <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                        <div className="rating">
                            <Stars stars={caregiverInfo.stars}/> <a href="#reviews">({caregiverInfo.reviews.length})</a>
                        </div>
                        <h4><span className="label label-success">${caregiverInfo.hourlyRate} HKD per hour</span></h4>
                    </div>
                    <div className="col-sm-3 profile-buttons">
                        <a className="btn btn-primary" href="#" role="button">Hire</a>
                        <a className="btn btn-default-clear" href="#" role="button">Message</a>
                    </div>
                </div>

                <div className="row profile-main">
                    <div className="col-sm-9 profile-body">
                        <div className="profile-section">
                            <h2>About</h2>
                            <p>{caregiverInfo.about}</p>
                        </div>
                        <div className="profile-section">
                            <h2>Availibility</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Day of Week</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {caregiverInfo.availability.map(item => 
                                        <tr>
                                            <td>{item.day}</td>
                                            <td>{item.startTime} - {item.endTime}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="profile-section" id="reviews">
                            <h2>Reviews</h2>
                            <h5 className="average-rating">
                                <Stars stars={caregiverInfo.stars}/> ({caregiverInfo.reviews.length} total)
                            </h5>
                            {
                                caregiverInfo.reviews.map(review => <Review key={review.id} {...review}/>)
                            }
                        </div>
                    </div>
                    <div className="col-sm-3 profile-sidebar">
                        <div className="location-bar">
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i> {this.state.data.location.join(', ')}</p>
                        </div>
                        <div className="sidebar-section checks">
                            <h5 className={caregiverInfo.car ? "pass-check" : "fail-check"}><i className={caregiverInfo.car ? "fa fa-check-square" : "fa fa-minus-square"} aria-hidden="true"></i> Car</h5>
                            <h5 className={caregiverInfo.backgroundCheck ? "pass-check" : "fail-check"}><i className={caregiverInfo.backgroundCheck ? "fa fa-check-square" : "fa fa-minus-square"} aria-hidden="true"></i> Background Check</h5>
                        </div>
                        <div className="sidebar-section">
                            <h5>Education</h5>
                            <p>{caregiverInfo.education}</p>
                            <h5>Experience</h5>
                            <p>{caregiverInfo.yearsOfExperience} Years</p>
                            <h5>Languages</h5>
                            <p>{caregiverInfo.languages.join(', ')}</p>
                            <h5>Other Notes</h5>
                            <p>{caregiverInfo.otherNotes === "" ? "N/A" : caregiverInfo.otherNotes}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
  }

class Review extends Component{
    render(){
        return(
            //TODO get reviewer pic
            <div>
                <div className="row reviewer-info">
                    <div className="col-xs-6">
                        <img src="images/profile/review.png" className="review-pic" />
                        <h4 className="review-name">{this.props.reviewBy}</h4>
                        <Stars stars={this.props.stars}/>
                    </div>
                    <div className="col-xs-6 review-date">
                        <p>{moment(this.props.createdAt).format("Do MMM YYYY")}</p>
                    </div>
                </div>
                <div className="review-desc">
                    <p>{this.props.review}</p>
                </div>
            </div>
        );
    }
}
  
export default Profile;
  