import React, { Component } from 'react';
import Card from '../../CaregiverCard';
import Select from 'react-select';
import { searchCaregivers, searchJobs } from '../../../api/api';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            languages: [],
            typeOfCaregiver: [],
            professionalServices: [],
            personalServices: [],
            medicalConditions: [],
            sex: {value: null},
            price: [0, 1000],
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
        this.professionalServices = [
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

        // this.medicalConditions = [
        // ];

        this.typeOfCaregiver = [
            { value:"Volunteer Caregivers", label:"Volunteer Caregivers"},
            { value:"Nursing Students", label:"Nursing Students"},
            { value:"Home Nurse", label:"Home Nurse"},
            { value:"Eldercare", label:"Eldercare"},
            { value:"Weekend Caregivers", label:"Weekend Caregivers"},
            { value:"Special Needs", label:"Special Needs"},
            { value:"Specialist Caregivers", label:"Specialist Caregivers"},
            { value:"Expert Caregivers", label:"Expert Caregivers"},
            { value:"TLC Caregivers", label:"TLC Caregivers"},
            { value:"Licensed Nurse", label:"Licensed Nurse"},
        ];
        this.personalServices = [
            { value:"Bathing", label:"Bathing"},
            { value:"Companionship", label:"Companionship"},
            { value:"Exercise", label:"Exercise"},
            { value:"Groceries and Shopping", label:"Groceries and Shopping"},
            { value:"Grooming", label:"Grooming"},
            { value:"Housekeeping", label:"Housekeeping"},
            { value:"Managing Medications", label:"Managing Medications"},
            { value:"Meal Prep", label:"Meal Prep"},
            { value:"Transferring and Mobility", label:"Transferring and Mobility"},
            { value:"Toileting", label:"Toileting"},
            { value:"Transportation", label:"Transportation"},
            { value:"Travel Companion", label:"Travel Companion"},
        ];
        this.sex = [
            { value: 'Male', label: 'Male'},
            { value: 'Female', label: 'Female'},
        ];
    }

    componentDidMount(){
        this.performSearch();        
    }

    performSearch(){
        this.setState({loading: true});

        if(this.props.type === "caregiver"){
            searchCaregivers({
                language: this.state.languages,
                sex: [this.state.sex === null ? {value: ""} : this.state.sex],  
                location: this.state.locations,
                skill: this.state.professionalServices,
                personalServices: this.state.personalServices,
                typeOfCaregiver: this.state.typeOfCaregiver,
                min: this.state.min,
                max: this.state.max
            }).then(json => {
                this.setState({data: json.data, loading: false});
            }).catch(err => {
                this.setState({data: [], loading: false});
                console.log(err);
            });
        }else{
            searchJobs({
                language: this.state.languages,
                sex: [this.state.sex === null ? {value: ""} : this.state.sex],                  
                location: [(this.state.locations === [] || this.state.locations === undefined) ? {value: ""} : this.state.locations],
                skill: this.state.professionalServices,
                personalServices: this.state.personalServices,
                typeOfCaregiver: this.state.typeOfCaregiver,
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
                            <h5>Location </h5>
                            <div id="location">
                                <Select options={this.locations}
                                    multi={this.props.type === "caregiver"}
                                    onChange={(e)=> this.setState({locations: e})}
                                    value={this.state.locations}/>
                            </div>
                        </div>
                        <div className="technical-filter">
                            <h5>Professional Services</h5>
                            <div id="tech">
                                <Select options={this.professionalServices}
                                    multi
                                    onChange={(e)=> this.setState({professionalServices: e})}
                                    value={this.state.professionalServices}/>
                            </div>
                        </div>
                        <div className="languages-filter">
                            <h5>Personal Services</h5>
                            <div id="pskill">
                                <Select options={this.personalServices}
                                    multi
                                    onChange={(e)=> this.setState({personalServices: e})}
                                    value={this.state.personalServices} />
                            </div>
                        </div>
                        <div className="languages-filter">
                            <h5>Type of Caregiver</h5>
                            <div id="pskill">
                                <Select options={this.typeOfCaregiver}
                                    multi
                                    onChange={(e)=> this.setState({typeOfCaregiver: e})}
                                    value={this.state.typeOfCaregiver} />
                            </div>
                        </div>

                        {
                            this.props.type === "caregiver" &&
                            <div className="languages-filter">
                                <h5>Hourly Rate</h5>
                                <div id="rate" className="row">
                                    <div className="col-xs-6">
                                        <input class="form-control" placeholder="Minimum" type="number" value = {this.state.min} onChange={(e) => this.setState({min: e.target.value < 0 ? 0 : e.target.value})}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <input class="form-control" placeholder="Maximum" type="number" value = {this.state.max} onChange={(e) => this.setState({max: e.target.value < 0 ? 0 : e.target.value})}/>
                                    </div>
                                </div>
                            </div>
                        }
                        
                        <div className="languages-filter">
                            <h5>Languages</h5>
                            <div id="medical">
                                <Select options={this.languages}
                                    multi
                                    onChange={(e)=> this.setState({languages: e})}
                                    value={this.state.languages} />
                            </div>
                        </div>

                        <div className="languages-filter">
                            <h5>Sex</h5>
                            <div id="sex">
                                <Select options={this.sex}
                                    onChange={(e)=> this.setState({sex: e})}
                                    value={this.state.sex} />
                            </div>
                        </div>

                            <button className="btn btn-success" onClick={this.performSearch}>Search</button>
                    </div>
                    <div className="col-sm-9 search-body">
                        <div className="row">
                            {
                                this.state.loading ? 
                                    <div className="loader">Loading...</div> : (
                                        this.state.data.length > 0 ?
                                        this.state.data.map(person => 
                                            <div key={person.id} className="col-xs-6 col-md-4 col-sm-6">
                                                {
                                                    this.props.type === "caregiver" ? 
                                                        <Card id={person.id} type={this.props.type} about={person.caregiver[0].about} stars={person.caregiver[0].stars}
                                                            firstName={person.firstName} lastName={person.lastName} location={person.location} profilePicUrl={person.profilePicUrl} /> :
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