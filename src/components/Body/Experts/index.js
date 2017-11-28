import React, { Component } from 'react';
import Header from '../../Header';

// import photos for medical expert categories, link from CSS file
import Acupuncture from '../../../images/medicalexperts/acupuncture.jpg';

class Experts extends Component {
    render() {
        const experts = {
            title: "Medical Experts",
            subtitle: "Access a network of Medical Experts who are a part of the HLO community."
        }

        const categories = [
            {
                image: Acupuncture,             
                name: "Chinese Medicine/Acupuncture"
            }
        ]

        return(
            <div>
                <Header header={experts}/>
                <div className="container infopage experts">
                    <div className="row">
                        {categories.map(function(e){
                            return (
                                <div className="col-md-6" style={{backgroundImage: `url(${e.image})`}}>
                                    <div className="caption">{e.name}</div>
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