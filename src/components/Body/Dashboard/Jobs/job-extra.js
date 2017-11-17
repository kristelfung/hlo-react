                <div id="job1" className="collapse job-desc">
                    <h4>Caregiver Applicants</h4>
                    <table className="table table-hover applicants">
                    {this.props.caregiversApplied.map(jobApplication=>(<tr>
                            <td>
                                <a href="profile.html" className="applicant-link">
                                    <h5 className="applicant-name">{jobApplication.caregiver.firstName}</h5>
                                    <p className="applicant-date">jobApplication.createdAt</p>
                                </a>
                            </td>
                            <td className="applicant-buttons">
                                <a href="#" className="btn btn-default">Hire</a>
                                <button href="#" className="btn btn-default">Message</button>
                            </td>
                        </tr>))}
                    </table>
                </div>
                <div id="job1" className="collapse job-desc">
                    <h4>Caregiver Offered</h4>
                    <table className="table table-hover applicants">
                    {this.props.caregiversOffered.map(jobApplication=>(<tr>
                            <td>
                                <a href="profile.html" className="applicant-link">
                                    <h5 className="applicant-name">{jobApplication.caregiver.firstName}</h5>
                                    <p className="applicant-date">jobApplication.createdAt</p>
                                </a>
                            </td>
                            <td className="applicant-buttons">
                                <a href="#" className="btn btn-default">Hire</a>
                                <button href="#" class="btn btn-default">Message</button>
                            </td>
                        </tr>))}
                    </table>
                </div>