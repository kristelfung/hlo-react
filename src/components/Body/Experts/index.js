import React, { Component } from 'react';
import Header from '../../Header';

// import photos for medical expert categories, link from CSS file
import Acupuncture from '../../../images/medicalexperts/acupuncture.jpg';
import Chiropractic from '../../../images/medicalexperts/chiropractic.jpg';
import Therapist from '../../../images/medicalexperts/therapist.jpg';
import SpecialNeeds from '../../../images/medicalexperts/specialneeds.jpg';
import Psychiatry from '../../../images/medicalexperts/psychiatry.jpg';
import Psychology from '../../../images/medicalexperts/psychology.jpg';
import MentalHealth from '../../../images/medicalexperts/health.jpg';
import Alternative from '../../../images/medicalexperts/alternative.jpg';

class Experts extends Component {
    render() {
        const experts = {
            title: "Medical Experts",
            subtitle: "Access a network of Medical Experts who are a part of the HLO community.",
        }

        const categories = [
            {
                image: Acupuncture,             
                name: "Chinese Medicine/Acupuncture",
                link: "medicalexperts/chinese"
            },
            {
                image: Chiropractic,
                name: "Chiropractic/Osteopath",
                link: "medicalexperts/chiropractic"
            },
            {
                image: Therapist,
                name: "Therapist",
                link: "medicalexperts/therapist"
            },
            {
                image: SpecialNeeds,
                name: "Special Needs",
                link: "medicalexperts/specialneeds"
            },
            {
                image: Psychiatry,
                name: "Psychiatry",
                link: "medicalexperts/psychiatry"
            },
            {
                image: Psychology,
                name: "Psychology",
                link: "medicalexperts/psychology"
            },
            {
                image: MentalHealth,
                name: "Mental Health",
                link: "medicalexperts/mentalhealth"
            },
            {
                image: Alternative,
                name: "Alternative Medicine",
                link: "medicalexperts/alternative"
            }
        ]

        return(
            <div>
                <Header header={experts}/>
                <div className="container infopage experts">
                    <div className="row">
                        {categories.map(function(e){
                            return (
                                <div className="col-sm-6">
                                    <a href={e.link}>
                                        <img src={e.image} />
                                        <div className="caption">{e.name}</div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Experts;