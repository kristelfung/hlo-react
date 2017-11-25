import React, { Component } from 'react';

class JobItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="job-desc">
                <div className="hired-caregiver">
                    <h4>Job Application</h4>                        
                    <img src={imageSrc} className="hired-picture" />
                    <h4>{this.state.jobApplied.firstName + " " + this.state.jobApplied.lastName}</h4>
                    <h5>${this.state.caregiver.hourlyRate} HKD per hour</h5> {/* YOUR hourly rate */}
                    <button className="btn btn-primary">Message</button>
                    {/* TODO: "Message" and "Profile" when its Job Applied, Job Completed or Current Job */}
                    {/* "Accept Job" or "Reject Job" when  */}
                    <button className="btn btn-default">Profile</button>
                    <h4>Job Description</h4>
                    <p>{this.props.description}</p>
                    <br/>
                    <h4>Work Times</h4>
                    <h6>From {moment(this.props.startDate).format('MMMM Do YYYY')} to {moment(this.props.endDate).format('MMMM Do YYYY')}</h6>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Day of Week</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.requiredTimes.map((item, idx) => 
                                <tr key={idx}>
                                    <td>{item.day}</td>
                                    <td>{item.startTime} - {item.endTime}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <MessageCompose open={this.state.messageCompose} onHide={() => this.setState({messageCompose: false})} fromUserID={sessionStorage.getItem('userID')} toUserID={this.state.toUserID}/>
                </div>
            </div>
        );
    }
}

export default JobItem;