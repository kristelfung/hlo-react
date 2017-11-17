import React, { Component } from 'react';
import Card from '../../CaregiverCard';

// need this in the API
import { getPerson } from '../../../api/api';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchtext: "",
            filters: [],
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

        this.addFilter = this.state.addFilter;
    }

    addFilter(val){
        this.setState({filters: this.state.filters.concat([val])});
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
                            <li onClick={this.addFilter("Central")}>Central</li>
                            <li onClick={this.addFilter("Sai Wan Ho")}>Sai Wan Ho</li>
                            <li onClick={this.addFilter("Aberdeen")}>Aberdeen</li>
                            <li onClick={this.addFilter("Wan Chai")}>Wan Chai</li>
                            <li onClick={this.addFilter("Kwun Tong")}>Kwun Tong</li>
                            <li onClick={this.addFilter("Sham Shui Po")}>Sham Shui Po</li>
                            <li onClick={this.addFilter("San Ko Pong")}>San Ko Pong</li>
                            <li onClick={this.addFilter("Mongkok")}>Mongkok</li>
                            <li onClick={this.addFilter("Sha Tin")}>Sha Tin</li>
                            <li onClick={this.addFilter("Tseun Wan")}>Tsuen Wan</li>
                            <li onClick={this.addFilter("Yuen Long")}>Yuen Long</li>
                            <li onClick={this.addFilter("Kowloon")}>Kowloon</li>
                        </ul>
                      </div>
                    </div>
                    <div className="technical-filter">
                      <h5 data-toggle="collapse" data-target="#tech">Technical Skills <span className="caret"></span></h5>
                      <div id="tech" className="collapse in">
                        <ul>
                            <li onClick={this.addFilter("Addiction Counselor")}>Addiction Counselor</li>
                            <li onClick={this.addFilter("Beautician")}>Beautician</li>
                            <li onClick={this.addFilter("Chinese Medicine Expert")}>Chinese Medicine Expert</li>
                            <li onClick={this.addFilter("Chiropractor")}>Chiropractor</li>
                            <li onClick={this.addFilter("Eldercare")}>Eldercare</li>
                            <li onClick={this.addFilter("Hair Stylist")}>Hair Stylist</li>
                            <li onClick={this.addFilter("Licensed Nurse")}>Licensed Nurse</li>
                            <li onClick={this.addFilter("Occupational Therapist")}>Occupational Therapist</li>
                            <li onClick={this.addFilter("Massage Therapist")}>Massage Therapist</li>
                            <li onClick={this.addFilter("Personal Trainer")}>Personal Trainer</li>
                            <li onClick={this.addFilter("Yoga Instructor")}>Yoga Instructor</li>
                            <li onClick={this.addFilter("Physiotherapist")}>Physiotherapist</li>
                            <li onClick={this.addFilter("Midwife")}>Midwife</li>
                            <li onClick={this.addFilter("Reflexologist")}>Reflexologist</li>
                            <li onClick={this.addFilter("Special Needs Therapist")}>Special Needs Therapist</li>
                            <li onClick={this.addFilter("Speech Therapist")}>Speech Therapist</li>
                            <li onClick={this.addFilter("Spiritual/Body/Mind Expert")}>Spiritual/Body/Mind Expert</li>
                            <li onClick={this.addFilter("Sports Therapist")}>Sports Therapist</li>
                        </ul>
                      </div>
                    </div>
                    <div className="languages-filter">
                      <h5 data-toggle="collapse" data-target="#language">Language <span className="caret"></span></h5>
                      <div id="language" className="collapse in">
                        <ul>
                            <li onClick={this.addFilter("Arabic")}>Arabic</li>
                            <li onClick={this.addFilter("Armenian")}>Armenian</li>
                            <li onClick={this.addFilter("ASL")}>ASL</li>
							<li onClick={this.addFilter("Cantonese")}>Cantonese</li>
                            <li onClick={this.addFilter("English")}>English</li>
							<li onClick={this.addFilter("French")}>French</li>
							<li onClick={this.addFilter("German")}>German</li>
                            <li onClick={this.addFilter("Greek")}>Greek</li>
                            <li onClick={this.addFilter("Hebrew")}>Hebrew</li>
                            <li onClick={this.addFilter("Hindi")}>Hindi</li>
                            <li onClick={this.addFilter("Italian")}>Italian</li>
                            <li onClick={this.addFilter("Korean")}>Korean</li>								
							<li onClick={this.addFilter("Manderin")}>Mandarin</li>
                            <li onClick={this.addFilter("Persian")}>Persian</li>
                            <li onClick={this.addFilter("Polish")}>Polish</li>
                            <li onClick={this.addFilter("Portuguese")}>Portuguese</li>
                            <li onClick={this.addFilter("Russian")}>Russian</li>
                            <li onClick={this.addFilter("Shanghainese")}>Shanghainese</li>
							<li onClick={this.addFilter("Spanish")}>Spanish</li>
                            <li onClick={this.addFilter("Tagalog")}>Tagalog</li>
                            <li onClick={this.addFilter("Urdu")}>Urdu</li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className="col-sm-9 search-body">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                        {
                            this.state.data.length > 0 ?
                            this.state.data.map(caregiver => <Card {...this.state.caregivers} />) : 
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