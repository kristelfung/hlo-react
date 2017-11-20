import React, { Component } from 'react';
import Card from '../../CaregiverCard';
import Select from 'react-select';
import { searchCaregivers, searchJobs } from '../../../api/api';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            skills: [],
            languages: [],
            data: [],
            loading: true
        }
        this.performSearch = this.performSearch.bind(this);
        this.locations = [
            { value: 'Wan Chai', label: 'Wan Chai'},
            { value: 'Central', label: 'Central'},
            {value: 'Sai Wan Ho', label: 'Sai Wan Ho'},
            {value: 'Aberdeen', label: 'Aberdeen'},
            {value: 'Wan Chai', label: 'Wan Chai'},
            {value: 'Kwun Tong', label: 'Kwun Tong'},
            {value: 'Sham Shui Po', label: 'Sham Shui Po'},
            {value: 'San Ko Pong',label: 'San Ko Pong'},
            {value: 'Mongkok', label: 'Mongkok'},
            {value: 'Sha Tin', label: 'Sha Tin'},
            {value: 'Tsuen Wan', label: 'Tsuen Wan'},
            {value: 'Yuen Long', label: 'Yuen Long'},
            {value: 'Kowloon', label: 'Kowloon'}
        ];
        this.skills = [
            { value:"Addiction Counselor", label:"Addiction Counselor"},
            { value:"Beautician", label:"Beautician"},
            { value:"Chinese Medicine Expert", label:"Chinese Medicine Expert"},
            { value:"Chiropractor", label:"Chiropractor"},
            { value:"Eldercare", label:"Eldercare"},
            { value:"Hair Stylist", label:"Hair Stylist"},
            { value:"Licensed Nurse", label:"Licensed Nurse"},
            { value:"Occupational Therapist", label:"Occupational Therapist"},
            { value:"Massage Therapist", label:"Massage Therapist"},
            { value:"Personal Trainer", label:"Personal Trainer"},
            { value:"Yoga Instructor", label:"Yoga Instructor"},
            { value:"Physiotherapist", label:"Physiotherapist"},
            { value:"Midwife", label:"Midwife"},
            { value:"Reflexologist", label:"Reflexologist"},
            { value:"Special Needs Therapist", label:"Special Needs Therapist"},
            { value:"Speech Therapist", label:"Speech Therapist"},
            { value:"Spiritual/Body/Mind Expert", label:"Spiritual/Body/Mind Expert"},
            { value:"Sports Therapist", label:"Sports Therapist"}
        ];
        this.languages = [
            {value: "Arabic", label:"Arabic" },
            {value:"Armenian", label:"Armenian" },
            {value:"ASL", label:"ASL" },
            {value:"Cantonese", label:"Cantonese" },
            {value:"English", label:"English" },
            {value:"French", label:"French" },
            {value:"German", label:"German" },
            {value:"Greek", label:"Greek" },
            {value:"Hebrew", label:"Hebrew" },
            {value:"Hindi", label:"Hindi" },
            {value:"Italian", label:"Italian" },
            {value:"Korean", label:"Korean" },                              
            {value:"Mandarin", label:"Mandarin" },
            {value:"Persian", label:"Persian" },
            {value:"Polish", label:"Polish" },
            {value:"Portuguese", label:"Portuguese" },
            {value:"Russian", label:"Russian" },
            {value:"Shanghainese", label:"Shanghainese" },
            {value:"Spanish", label:"Spanish" },
            {value:"Tagalog", label:"Tagalog" },
            {value:"Urdu", label:"Urdu" }
        ];

        this.performSearch();
    }

    performSearch(){
        this.setState({loading: true});

        if(this.props.type === "caregiver"){
            searchCaregivers({
                location: this.state.locations,
                skill: this.state.skills,
                language: this.state.languages
            }).then(json => {
                this.setState({data: json.data, loading: false});
            }).catch(err => {
                this.setState({data: [], loading: false});
                console.log(err);
            });
        }else{
            searchJobs({
                location: this.state.locations,
                skill: this.state.skills,
                language: this.state.languages
            }).then(json => {
                this.setState({data: json.data, loading: false});
            }).catch(err => {
                this.setState({data: [], loading: false});
                console.log(err);
            });
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row equal">
                    <div className="col-sm-3 search-filters">
                        <h3>Filters</h3>
                        <div className="location-filter">
                            <h5 data-toggle="collapse" data-target="#location">Location </h5>
                            <div id="location">
                                <Select options={this.locations}
                                    multi
                                    onChange={(e)=> this.setState({locations: e}, this.performSearch)}
                                    value={this.state.locations}/>
                            </div>
                        </div>
                        <div className="technical-filter">
                            <h5 data-toggle="collapse" data-target="#tech">Technical Skills </h5>
                            <div id="tech" className="collapse in">
                                <Select options={this.skills}
                                    multi
                                    onChange={(e)=> this.setState({skills: e}, this.performSearch)}
                                    value={this.state.skills}/>
                            </div>
                        </div>
                        <div className="languages-filter">
                            <h5 data-toggle="collapse" data-target="#language">Language </h5>
                            <div id="language" className="collapse in">
                                <Select options={this.languages}
                                    multi
                                    onChange={(e)=> this.setState({languages: e}, this.performSearch)}
                                    value={this.state.languages} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 search-body">
                        <div className="row">
                            {
                                this.state.loading ? 
                                    <div class="loader">Loading...</div> : (
                                        this.state.data.length > 0 ?
                                        this.state.data.map(person => 
                                            <div className="col-md-4 col-sm-6">
                                                {
                                                    this.props.type === "caregiver" ? 
                                                        <Card id={person.id} type={this.props.type} about={person.caregiver[0].about} stars={person.caregiver[0].stars}
                                                            firstName={person.firstName} lastName={person.lastName} location={person.location}/> :
                                                            <Card id={person.id} type={this.props.type} {...person} />    
                                                    }
                                            </div>) : 
                                        <div>No results. Try another search query.</div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;