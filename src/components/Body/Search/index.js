import React, { Component } from 'react';
import Card from '../../CaregiverCard';
import Select from 'react-select';
import { searchCaregivers, searchJobs } from '../../../api/api';
import {locations, professionalServices, personalServices, languages, typeOfCaregiver, sex} from '../../../utils'

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
                location: [(this.state.locations === [] || this.state.locations === null) ? {value: ""} : this.state.locations],
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
                                <Select options={locations}
                                    multi={this.props.type === "caregiver"}
                                    onChange={(e)=> this.setState({locations: e})}
                                    value={this.state.locations}/>
                            </div>
                        </div>
                        <div className="technical-filter">
                            <h5>Professional Services</h5>
                            <div id="tech">
                                <Select options={professionalServices}
                                    multi
                                    onChange={(e)=> this.setState({professionalServices: e})}
                                    value={this.state.professionalServices}/>
                            </div>
                        </div>
                        <div className="languages-filter">
                            <h5>Personal Services</h5>
                            <div id="pskill">
                                <Select options={personalServices}
                                    multi
                                    onChange={(e)=> this.setState({personalServices: e})}
                                    value={this.state.personalServices} />
                            </div>
                        </div>
                        <div className="languages-filter">
                            <h5>Type of Caregiver</h5>
                            <div id="pskill">
                                <Select options={typeOfCaregiver}
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
                                <Select options={languages}
                                    multi
                                    onChange={(e)=> this.setState({languages: e})}
                                    value={this.state.languages} />
                            </div>
                        </div>

                        <div className="languages-filter">
                            <h5>Sex</h5>
                            <div id="sex">
                                <Select options={sex}
                                    onChange={(e)=> this.setState({sex: e})}
                                    value={this.state.sex} />
                            </div>
                        </div>

                            <button className="btn btn-default" onClick={this.performSearch}>Search</button>
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