import React, { Component } from 'react';
import Card from '../CaregiverCard';

// need this in the API
import { getPerson } from '../../../api/api';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchtext: [],
            locations: [],
            skills: [],
            languages: [],
            data: [],
            loading: true
        }

        getPerson().then(json => {
            console.log(json);
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

    addFilter(val){
        this.setState({filters: update(this.state.filters, {$splice: [[index, 1]]})});
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
                            <li>Central</li>
                            <li>Sai Wan Ho</li>
                            <li>Aberdeen</li>
                            <li>Wan Chai</li>
                            <li>Kwun Tong</li>
                            <li>Sham Shui Po</li>
                            <li>San Ko Pong</li>
                            <li>Mongkok</li>
                            <li>Sha Tin</li>
                            <li>Tsuen Wan</li>
                            <li>Yuen Long</li>
                            <li>Kowloon</li>
                        </ul>
                      </div>
                    </div>
                    <div className="technical-filter">
                      <h5 data-toggle="collapse" data-target="#tech">Technical Skills <span className="caret"></span></h5>
                      <div id="tech" className="collapse in">
                        <ul>
                            <li>Addiction Counselor</li>
                            <li>Beautician</li>
                            <li>Chinese Medicine Expert</li>
                            <li>Chiropractor</li>
                            <li>Eldercare</li>
                            <li>Hair Stylist</li>
                            <li>Licensed Nurse</li>
                            <li>Occupational Therapist</li>
                            <li>Massage Therapist</li>
                            <li>Personal Trainer</li>
                            <li>Yoga Instructor</li>
                            <li>Physiotherapist</li>
                            <li>Midwife</li>
                            <li>Reflexologist</li>
                            <li>Special Needs Therapist</li>
                            <li>Speech Therapist</li>
                            <li>Spiritual/Body/Mind Expert</li>
                            <li>Sports Therapist</li>
                        </ul>
                      </div>
                    </div>
                    <div className="languages-filter">
                      <h5 data-toggle="collapse" data-target="#language">Language <span className="caret"></span></h5>
                      <div id="language" className="collapse in">
                        <ul>
                            <li>Arabic</li>
                            <li>Armenian</li>
                            <li>ASL</li>
							<li>Cantonese</li>
                            <li>English</li>
							<li>French</li>
							<li>German</li>
                            <li>Greek</li>
                            <li>Hebrew</li>
                            <li>Hindi</li>
                            <li>Italian</li>
                            <li>Korean</li>								
							<li>Mandarin</li>
                            <li>Persian</li>
                            <li>Polish</li>
                            <li>Portuguese</li>
                            <li>Russian</li>
                            <li>Shanghainese</li>
							<li>Spanish</li>
                            <li>Tagalog</li>
                            <li>Urdu</li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="col-sm-9 search-body">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                        {
                            this.state.data.length > 0 ?
                            this.state.data.map(caregiver => <Card {...this.state.caregivers[i]} />) : 
                            <div>No results. Try another search query.</div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Search;