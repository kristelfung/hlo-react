import React, { Component } from 'react';
import moment from 'moment';
import {Modal} from 'react-bootstrap';
import Select from 'react-select';

import placeholder from '../../../images/profile-placeholder.png'
import coverPlaceholder from '../../../images/profile/cov.jpg'

import {getUser, baseUrl, getJobList, offerJob} from '../../../api/api'
import Stars from '../../Stars'
import MessageCompose from '../Dashboard/Messages/MessageCompose'

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
            messageCompose: false,
            loading: true
        }

        getUser(props.match.params.id).then(json => {
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
                <div className="container-fluid profile-cover" style={{background: (this.state.data.coverPicUrl === undefined || this.state.data.coverPicUrl === "") ? coverPlaceholder : baseUrl + this.state.data.coverPicUrl}}/>
                <div className="row profile-head">
                    <div className="col-sm-3">
                        <div>
                            <img src={(this.state.data.profilePicUrl === undefined || this.state.data.profilePicUrl === "") ? placeholder : baseUrl + this.state.data.profilePicUrl} className="profile-pic" />
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
                    { sessionStorage.getItem("loggedIn") && 
                        <div className="col-sm-3 profile-buttons">
                            {
                                sessionStorage.getItem("userType") === "customer" && 
                                <a className="btn btn-primary" role="button" onClick={() => this.setState({jobOffer: true})}>Offer</a>
                            }
                            <a className="btn btn-default-clear" role="button" onClick={() => this.setState({messageCompose: true})} >Message</a>
                            <MessageCompose open={this.state.messageCompose} onHide={() => this.setState({messageCompose: false})} fromUserID={sessionStorage.getItem('userID')} toUserID={this.props.match.params.id}/>
                            <JobOffer open={this.state.jobOffer} onHide={() => this.setState({jobOffer: false})} fromUserID={sessionStorage.getItem('userID')} toUserID={this.props.match.params.id}/>
                        </div>
                     }
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
                                    {caregiverInfo.availability.map((item, idx) => 
                                        <tr key={idx}>
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
            <div>
                <div className="row reviewer-info">
                    <div className="col-xs-6">
                        <img src={(this.props.reviewByProfilePic === undefined || this.props.reviewByProfilePic === "") ? placeholder : baseUrl + this.props.reviewByProfilePic} className="review-pic" />
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

class JobOffer extends Component{
    constructor(props){
        super(props);
        this.state = {
            caregiverID: props.toUserID,
            customerID: props.fromUserID,
            job: '',
            options: []
        }

        getJobList(props.fromUserID)
        .then(json => {console.log(json); this.setState({loading: false, options: json.data})})
        .catch(err => {console.log(err); this.setState({loading: false})});
    }

    offerJob(e){
        e.preventDefault();
        let info = {
            jobID: this.state.job.id,
            caregiverID: this.state.caregiverID
        }
        offerJob(info).then(json => this.props.onHide())
        .catch(err => {console.log(err); this.props.onHide();});
    }

    render(){
        return(
            <Modal show={this.props.open} onHide={this.props.onHide}>
                <Modal.Header >
                    <Modal.Title>Offer Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="job">Job</label>
                            <Select
                                id="job" 
                                placeholder="Job"
                                name="form-field-job"
                                valueKey="id" labelKey="name"
                                value={this.state.job} onChange={(e) => this.setState({job: e})}
                                isLoading={this.state.loading}
                                options={this.state.options}
                            />
                        </div>
                        <div className="submit-buttons">       
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onHide}>Cancel</button>                                
                            <button type="submit" className="btn btn-primary" onClick={this.offerJob.bind(this)}>Offer</button>
                        </div> 
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}
  
export default Profile;
  