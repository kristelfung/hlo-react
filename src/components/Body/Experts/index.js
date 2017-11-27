import React, { Component } from 'react';
import Header from '../../Header';

class Experts extends Component {
    render() {
        const experts = {
            title: "Medical Experts",
            subtitle: "Access a network of Medical Experts who are a part of the HLO community."
        }

        return(
            <div>
                <Header header={experts}/>
                <div className="container infopage">
                    
                </div>
            </div>
        );
    }
}

export default Experts;