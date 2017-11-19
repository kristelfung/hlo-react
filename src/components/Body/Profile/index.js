import React, { Component } from 'react';
import moment from 'moment';

import {getUser} from '../../../api/api'

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
					"experience": "",
					"languages": [],
					"about": "",
                    "otherNotes": "",
                    reviews: [],
                    availability: {}
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
        let availArray = [];
        for (var key in caregiverInfo.availability) {
            var item = caregiverInfo.availability[key];
            availArray.push({
                day: key,
                time: item
            })
        };

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

        return (
            <div>
                <div className="container-fluid profile-cover" />
                <div className="row profile-head">
                    <div className="col-sm-3">
                        <div className="profile-pic" style="background-image: url('../images/profile/dp.png')">
                            <div className="favorite">
                                <a href="#"><i className="fa fa-plus" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 name">
                        <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                        <div className="rating">
                            {stars} <a href="#reviews">({caregiverInfo.reviews.length})</a>
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
                                    {availArray.map(item => 
                                        <tr>
                                            <td>{item.day}</td>
                                            <td>{item.time}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="profile-section" id="reviews">
                            <h2>Reviews</h2>
                            <h5 className="average-rating">
                                {stars} ({caregiverInfo.reviews.length} total)
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
                            <p>{caregiverInfo.experience}</p>
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
        let stars = [];
        for (var i=0; i < this.props.stars; i++) {
            stars.push(<i className="fa fa-star" aria-hidden="true" ></i>);
        }
        for (var i=0; i < 5-this.props.stars; i++) {
            stars.push(<i className="fa fa-star-o" aria-hidden="true" ></i>);
        }

        return(
            //TODO get reviewer pic
            <div>
                <div className="row reviewer-info">
                    <div className="col-xs-6">
                        <img src="images/profile/review.png" className="review-pic" />
                        <h4 className="review-name">{this.props.reviewBy}</h4>
                        {stars}
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
  