import React, { Component } from 'react';
import Card from './'

// need this in the API
import { getCaregiver, getJob } from '../../../api/api';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caregiver: [],
            job: [],
            loadingC: true,
            loadingJ: true
        }

        getCaregiver().then(json => {
            console.log(json);
            this.setState({
                loadingC: false,
                data: json.data
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loadingC: false,
                error: err
            });
        });

        getJob().then(json => {
            console.log(json);
            this.setState({
                loadingJ: false,
                data: json.data
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loadingJ: false,
                error: err
            });
        });
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row equal">
                <div className="col-sm-3 search-filters">
                    <div className="form-group search-bar">
                        <span className="fa fa-search"></span>
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <div className="location-filter">
                      <h5 data-toggle="collapse" data-target="#location">Location <span className="caret"></span></h5>
                      <div id="location" className="collapse in">
                        <ul>
                            <li>Causeway Bay</li>
                            <li>Wan Chai</li>
                            <li>Mid Levels</li>
                            <li>Central</li>
                            <li>Repulse Bay</li>
                        </ul>
                      </div>
                    </div>
                    <div className="technical-filter">
                      <h5 data-toggle="collapse" data-target="#tech">Technical Skills <span className="caret"></span></h5>
                      <div id="tech" className="collapse in">
                        <ul>
                            <li>Eldercare</li>
                            <li>Addiction Counsellor</li>
                            <li>Physiotherapist</li>
                            <li>Chiropractor</li>
                            <li>Masseur</li>
                        </ul>
                      </div>
                    </div>
                    <div className="languages-filter">
                      <h5 data-toggle="collapse" data-target="#language">Language <span className="caret"></span></h5>
                      <div id="language" className="collapse in">
                        <ul>
                            <li>English</li>
                            <li>Cantonese</li>
                            <li>Manderin</li>
                            <li>Taiwanese</li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="col-sm-9 search-body">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="search-card">
                                <a href={this.state.caregiver.link}>
                                    <span className="link-spanner"></span>
                                </a>
                                <img src="images/search/dp.jpg" className="card-dp"/>
                                <div className="card-desc">
                                    <h4>{this.state.caregiver.name}</h4>
                                    {this.state.caregiver.stars}
                                    <p>
                                        <span className="label label-success">{this.state.caregiver.location[0]}</span>
                                        <span className="label label-success">{this.state.caregiver.location[1]}</span>
                                    </p>
                                    <p className="card-about">{this.state.caregiver.about}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Search;