import React, { Component } from 'react';
import moment from 'moment';
import {Modal} from 'react-bootstrap';

import placeholder from '../../../../images/profile-placeholder.png'
import coverPlaceholder from '../../../../images/profile/cov.jpg'

import API, {baseUrl, getJobData} from '../../../../api/api'
import MessageCompose from '../../Dashboard/Messages/MessageCompose'

class Job extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
              "name": "",
              "createdAt": "",
              "address": "",
              "gender": "",
              "dateOfBirth": "",
              "languages": [],
              "hobbies": "",
              "typeOfCaregiver": [],
              "professionalServices": [],
              "personalServices": [],
              "specialMedical": [],
              "description": "",
              "lovedOnesDescription": "",
              "availability": [],
              "district": "",
              },
            messageCompose: false,
            loading: true,
            hasApplied: false,
        }

        getJobData(props.match.params.id)
        .then(json => {
          this.setState({
              loading: false,
              data: json.data,
              hasApplied: json.data.caregiversApplied.includes(sessionStorage.getItem('caregiverID')),
          });
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });

        this.handleApply = this.handleApply.bind(this);
    }

    handleApply() {
      this.setState({ hasApplied: true });
    }

    render() {

        let jobInfo = this.state.data;
        return (
            <div>
                <div className="container-fluid profile-cover" style={{background: (this.state.data.coverPicUrl === undefined || this.state.data.coverPicUrl === "") ? coverPlaceholder : baseUrl + this.state.data.coverPicUrl}}/>
                <div className="row profile-head">
                    <div className="col-sm-3">
                        <div>
                            <img src={(this.state.data.profilePicUrl === undefined || this.state.data.profilePicUrl === "") ? placeholder : baseUrl + this.state.data.profilePicUrl} className="profile-pic" />
                        </div>
                    </div>
                    <div className="col-sm-6 name">
                        <h1>{jobInfo.name}</h1>
                        <div className="job-posted-date">
                            <h4> Job posted on: {moment(jobInfo.createdAt).format("Do MMM YYYY")} </h4>
                        </div>
                        <h4><span className="label label-success">Live-in</span></h4>
                    </div>
                    { sessionStorage.getItem("loggedIn") &&
                        <div className="col-sm-3 profile-buttons">
                            {
                                sessionStorage.getItem("userType") === "caregiver" && this.state.hasApplied === false &&
                                <a className="btn btn-primary" role="button" onClick={() => this.setState({apply: true})}> Apply </a>
                            }
                            {
                                sessionStorage.getItem("userType") === "caregiver" && this.state.hasApplied === true &&
                                <button type="button" className="btn btn-default" data-dismiss="modal" disabled={true}> Submitted </button>
                            }
                            <a className="btn btn-default-clear" role="button" onClick={() => this.setState({messageCompose: true})}>Message</a>
                            <MessageCompose open={this.state.messageCompose} onHide={() => this.setState({messageCompose: false})} fromUserID={sessionStorage.getItem('userID')} toUserID={this.props.match.params.id}/>
                            <Apply open={this.state.apply} onHide={() => this.setState({apply: false})} handleApply={this.handleApply} name={this.state.data.name} fromUserID={sessionStorage.getItem('userID')}/>
                        </div>
                     }
                </div>

               <div className="row profile-main">
                    <div className="col-sm-9 profile-body">
                        <div className="profile-section">
                            <h2>Job Description</h2>
                            <p>{jobInfo.description}</p>
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
                                    <tr>
                                        <th>{this.props.day}</th>
                                        <th>{this.props.startTime} - {this.props.endTime} </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="profile-section">
                          <h2>Describe your Loved Ones</h2>
                          <p> {this.state.lovedOnesDescription} </p>
                        </div>
                    </div>
                    <div className="col-sm-3 profile-sidebar">
                        <div className="location-bar">
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i> {this.state.data.district}</p>
                        </div>
                        <div className="sidebar-section">
                            <h5>Address</h5>
                            <p>{jobInfo.address}</p>
                            <h5>Sex</h5>
                            <p>{jobInfo.gender}</p>
                            <h5>Date of Birth</h5>
                            <p>{moment(jobInfo.dateOfBirth).format("Do MMM YYYY")}</p>
                            <h5>Languages</h5>
                            <p>{jobInfo.languages.join(', ')}</p>
                            <h5>Hobbies</h5>
                            <p>{jobInfo.hobbies}</p>
                            <h5>Type of Caregiver</h5>
                            <p>{jobInfo.typeOfCaregiver.join(', ')}</p>
                            <h5>Professional Services</h5>
                            <p>{jobInfo.professionalServices.join(', ')}</p>
                            <h5>Personal Services</h5>
                            <p>{jobInfo.personalServices.join(', ')}</p>
                            <h5>Special Medical Conditions</h5>
                            <p>{ jobInfo.specialMedical.length ? jobInfo.specialMedical.join(', ') : "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        }
  }

class Apply extends Component {
  applyJob() {
    this.props.handleApply();
    this.props.onHide();
    alert("Update Job Object");
  }

  render() {
    return(
    <Modal show={this.props.open} onHide={this.props.onHide}>
        <Modal.Header >
            <Modal.Title>Application Confirmation</Modal.Title>
            <h4><br/>You are applying for the job : {this.props.name}. <br/><br/>Would you like to proceed with this application?</h4>
        </Modal.Header>
        <Modal.Body>
                <div className="submit-buttons">
                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onHide}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={this.applyJob.bind(this)}>Apply</button>
                </div>
        </Modal.Body>
    </Modal>
    );
  }
}


export default Job;
