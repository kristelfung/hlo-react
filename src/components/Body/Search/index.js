import React, { Component } from 'react';
import Card from '../../CaregiverCard';

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

        this.logSearchText = this.logSearchText.bind(this);
        this.logLocations = this.logLocations.bind(this);
        this.logSkills = this.logSkills.bind(this);
        this.logLanguages = this.logLanguages.bind(this);
    }

    logSearchText(val) { //searchtext
        this.setState({searchtext: val});
    }

    logLocations(val){
        this.setState({locations: val});
    }

    logSkills(val){
        this.setState({skills: val});
    }

    logLanguages(val){
        this.setState({languages: val});
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row equal">
                <div className="col-sm-3 search-filters">
                    <div className="form-group search-bar">
                        <span className="fa fa-search"></span>
                        <input type="text" className="form-control" placeholder="Search" value = {this.state.searchtext} onChange={(e) => this.setState({searchtext: e.target.value})}/>
                    </div>
                    <div className="location-filter">
                      <h5 data-toggle="collapse" data-target="#location">Location <span className="caret"></span></h5>
                      <div id="location" className="collapse in">
                        <ul value={this.state.logLocations} onClick={this.logLocations}>
                            <li value="Central">Central</li>
                            <li value="Sai Wan Ho">Sai Wan Ho</li>
                            <li value="Aberdeen">Aberdeen</li>
                            <li value="Wan Chai">Wan Chai</li>
                            <li value="Kwun Tong">Kwun Tong</li>
                            <li value="Sham Shui Po">Sham Shui Po</li>
                            <li value="San Ko Pong">San Ko Pong</li>
                            <li value="Mongkok">Mongkok</li>
                            <li value="Sha Tin">Sha Tin</li>
                            <li value="Tseun Wan">Tsuen Wan</li>
                            <li value="Yuen Long">Yuen Long</li>
                            <li value="Kowloon">Kowloon</li>
                        </ul>
                      </div>
                    </div>
                    <div className="technical-filter">
                      <h5 data-toggle="collapse" data-target="#tech">Technical Skills <span className="caret"></span></h5>
                      <div id="tech" className="collapse in">
                        <ul value={this.state.logSkills} onClick={this.logSkills}>
                            <li value="Addiction Counselor">Addiction Counselor</li>
                            <li value="Beautician">Beautician</li>
                            <li value="Chinese Medicine Expert">Chinese Medicine Expert</li>
                            <li value="Chiropractor">Chiropractor</li>
                            <li value="Eldercare">Eldercare</li>
                            <li value="Hair Stylist">Hair Stylist</li>
                            <li value="Licensed Nurse">Licensed Nurse</li>
                            <li value="Occupational Therapist">Occupational Therapist</li>
                            <li value="Massage Therapist">Massage Therapist</li>
                            <li value="Personal Trainer">Personal Trainer</li>
                            <li value="Yoga Instructor">Yoga Instructor</li>
                            <li value="Physiotherapist">Physiotherapist</li>
                            <li value="Midwife">Midwife</li>
                            <li value="Reflexologist">Reflexologist</li>
                            <li value="Special Needs Therapist">Special Needs Therapist</li>
                            <li value="Speech Therapist">Speech Therapist</li>
                            <li value="Spiritual/Body/Mind Expert">Spiritual/Body/Mind Expert</li>
                            <li value="Sports Therapist">Sports Therapist</li>
                        </ul>
                      </div>
                    </div>
                    <div className="languages-filter">
                      <h5 data-toggle="collapse" data-target="#language">Language <span className="caret"></span></h5>
                      <div id="language" className="collapse in">
                        <ul value={this.state.logLanguages} onClick={this.logLanguages}>
                            <li value="Arabic">Arabic</li>
                            <li value="Armenian">Armenian</li>
                            <li value="ASL">ASL</li>
							<li value="Cantonese">Cantonese</li>
                            <li value="English">English</li>
							<li value="French">French</li>
							<li value="German">German</li>
                            <li value="Greek">Greek</li>
                            <li value="Hebrew">Hebrew</li>
                            <li value="Hindi">Hindi</li>
                            <li value="Italian">Italian</li>
                            <li value="Korean">Korean</li>								
							<li value="Mandarin">Mandarin</li>
                            <li value="Persian">Persian</li>
                            <li value="Polish">Polish</li>
                            <li value="Portuguese">Portuguese</li>
                            <li value="Russian">Russian</li>
                            <li value="Shanghainese">Shanghainese</li>
							<li value="Spanish">Spanish</li>
                            <li value="Tagalog">Tagalog</li>
                            <li value="Urdu">Urdu</li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="col-sm-9 search-body">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                        {
                            this.state.data.length > 0 ?
                            this.state.data.map(person => <Card {...this.state.person} />) : 
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