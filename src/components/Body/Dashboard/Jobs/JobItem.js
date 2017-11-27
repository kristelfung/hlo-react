import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import moment from 'moment';

import {acceptJob, declineJob, getJobData} from '../../../../api/api';
import placeholder from '../../../../images/profile-placeholder.png'
import confirmedJob from '../../../../images/dashboard/confirmedjob.png'
import pendingJob from '../../../../images/dashboard/pendingjob.png'
import MessageCompose from '../Messages/MessageCompose'

class JobItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOfferList: this.props.isOfferList,
      isOpen: false,
      isloading: true,
      error: false,
      job: {},
    };

    getJobData(this.props.job === undefined ? this.props.id : this.props.job).then(json =>
        this.setState({
            job: json.data,
            error: false,
            loading: false,
          }
    )).catch(err => {
        console.log(err);
        this.setState({
            loading: false,
            error: true
        });
    });

    console.log(this.props);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

    handleAccept() {
      let info = {
        jobID: this.state.job.id,        
        jobOfferID: this.props.jobOfferID
      };

      acceptJob(info).then(json => {console.log(json.data)})
      .catch(err => console.log(err));
    }

    handleDecline() {
      let info = {
        jobID: this.state.job.id,
        jobOfferID: this.props.jobOfferID
      };

      declineJob(info).then(json => {console.log(json.data)})
      .catch(err => console.log(err));
    }

    render() {
      const jobInfo = this.state.job;
      const creator = this.state.job.createdBy;

      if(this.state.loading === false) {
      return (
        <div >
          <Panel collapsible  bsStyle="danger" header = {
            <div >
                <div className="col-xs-6">
                    <h4>{creator.firstName + " " + creator.lastName}</h4>
                    <h6 className="date">{moment(jobInfo.createdAt).format('MMMM Do YYYY')}</h6>
                </div>

                <div className="expander">
                    {
                      ( this.props.name === "Current Job" ||  this.props.name === "Completed Job") && <img className="status-logo" src={confirmedJob} />
                    }
                    {
                      ( this.props.name === "Job Offered" ||  this.props.name === "Job Applied") && <img className="status-logo" src={pendingJob} />
                    }
                    <div className="next">
                      <span className="expand-job">
                        <i className="fa fa-angle-down expand-job" aria-hidden="true"/>
                        </span>
                      </div>
                      </div>
                    </div>
                  }>

                  <div className="job-content">
                    <div className="title">
                        <h3>{this.props.name}</h3>
                            <img src={ placeholder } />
                              { /*Todo setting the profile? pic
                                <img src={(this.state.data.profilePicUrl === undefined || this.state.data.profilePicUrl === "") ? placeholder : baseUrl + this.state.data.profilePicUrl} />
                                */}
                                </div>
                                  {
                                    this.state.isOfferList &&
                                      <div className="jobs-buttons">
                                        <button className="btn btn-primary" role="button" onClick={this.handleAccept}> Accept </button>
                                        <button className="btn btn-default" role="button" onClick={this.handleDecline}> Decline </button>
                                      </div>
                                  }

                                  {
                                    !this.state.isOfferList &&
                                      <div className="jobs-buttons">
                                        <a className="btn btn-primary" role="button" onClick={() => this.setState({messageCompose: true})}> Message </a>
                                        <a href={"/profile/job/"+ jobInfo.id} className="btn btn-default"> Profile </a>
                                      </div>
                                  }

                              <h4>Job Description</h4>
                              <p>{jobInfo.description}</p>
                              <br/>
                              <h4>Work Times</h4>
                              <h6>From {moment(jobInfo.startDate).format('MMMM Do YYYY')} to {moment(jobInfo.endDate).format('MMMM Do YYYY')}</h6>
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th>Day of Week</th>
                                          <th>Time</th>
                                      </tr>

                                      {
                                          jobInfo.requiredTimes.map((item, index) => {
                                          return (
                                            <tr key={index}>
                                              <th>{item.day}</th>
                                              <th>{item.startTime} - {item.endTime}</th>
                                            </tr>
                                          )})
                                      }

                                </thead>
                            </table>
                         </div>
                      </Panel>
                <MessageCompose open={this.state.messageCompose} onHide={() => this.setState({messageCompose: false})} fromUserID={sessionStorage.getItem('userID')} toUserID={creator.id}/>
              </div>
        );
      } else {
        return <p> Loading...</p>;
      }
    }
}

JobItem.defaultProps = {
    isOfferList: false,
}

export default JobItem;
