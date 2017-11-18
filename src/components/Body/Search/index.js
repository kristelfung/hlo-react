import React, { Component } from 'react';
import Card from '../../CaregiverCard';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// need this in the API
import { searchCaregivers } from '../../../api/api';
import queryString from 'query-string';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchtext: [],
            locations: [],
            skills: [],
            languages: [],
            data: [],
            loading: true,
            query:""
        }
        this.array=[];
        // getPerson().then(json => {
        //     console.log(json);
        //     this.setState({
        //         loading: false,
        //         data: json.data
        //     });
        // }).catch(err => {
        //     console.log(err);
        //     this.setState({
        //         loading: false,
        //         error: err
        //     });
        // });

        this.logSearchText = this.logSearchText.bind(this);
        this.logLocations = this.logLocations.bind(this);
        this.logSkills = this.logSkills.bind(this);
        this.logLanguages = this.logLanguages.bind(this);
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
    }

    logSearchText(val) { //searchtext
        this.setState({searchtext: val});
    }

    logLocations(val){
        var data;
        setTimeout(()=>{
            this.setState({locations: val});
            data = {
                location: this.state.locations,
                skill: this.state.skills,
                language: this.state.languages
            };
            var query = this.state.query + "location=";
            this.state.locations.map((location)=>{
                query = query + location.value + "&";
            });
            this.setState({query: query});
            searchCaregivers(this.state.query);
        }, 300);  
    }

    logSkills(val){
        var data;
        setTimeout(()=>{
            this.setState({skills: val});
            data = {
                location: this.state.locations,
                skill: this.state.skills,
                language: this.state.languages
            };
            var query = this.state.query + "skill=";
            this.state.skills.map((skill)=>{
                query = query + skill.value + "&";
            });
            this.setState({query: query});
            searchCaregivers(this.state.query);
        }, 300);
        
    }

    logLanguages(val){
        var data;
        
        setTimeout(()=>{
            this.setState({languages: val});
            data = {
                location: this.state.locations,
                skill: this.state.skills,
                language: this.state.languages
            };

            //var query = "language=";
            //this.array = [];
            this.state.languages.map((language)=>{
                //console.log(this.state.query);
                //console.log(language.value);
                this.array.push[language.value];
                //query = query+language.value + "&";
            });

            var query = queryString.stringify(this.array);
            console.log(this.array);
            //this.setState({query: query});
            //searchCaregivers(this.state.query);
           // console.log(query);
        }, 300);

        
    }

    render(){

        return(
            <div className="container-fluid">
            <div className="row equal">
                <div className="col-sm-3 search-filters">
                   
                    <div className="location-filter">
                        <h5 data-toggle="collapse" data-target="#location">Location <span className="caret"></span></h5>
                        <div id="location">
                            <Select options={this.locations}
                                multi
                                onChange={(e)=> this.logLocations(e)}
                                value={this.state.locations}/>
                        </div>
                    </div>
                    <div className="technical-filter">
                        <h5 data-toggle="collapse" data-target="#tech">Technical Skills <span className="caret"></span></h5>
                        <div id="tech" className="collapse in">
                            <Select options={this.skills}
                                multi
                                onChange={(e)=> this.logSkills(e)}
                                value={this.state.skills}/>
                        </div>
                    </div>
                    <div className="languages-filter">
                        <h5 data-toggle="collapse" data-target="#language">Language <span className="caret"></span></h5>
                        <div id="language" className="collapse in">
                            <Select options={this.languages}
                                multi
                                onChange={(e)=> this.logLanguages(e)} 
                                value={this.state.languages} />
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