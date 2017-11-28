import React, { Component } from 'react';
import Header from '../../Header';

class Privacy extends Component {
    render() {
        const privacy = {
            title: "Privacy Policy",
            subtitle: "Legal information and notices for the HLO service."
        }
        return(
            <div>
                <Header header={privacy} />
                privacy policy
            </div>
        );
    }
}

export default Privacy;