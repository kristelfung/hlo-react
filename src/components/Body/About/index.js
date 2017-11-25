import React, { Component } from 'react';
import Header from '../../Header';

const about = {
    title: "About Us and Dream Team", 
    subtitle: "Learn more about HLO and the people behind it."
}

class About extends Component {
    render() {
        return (
            <div>
                <Header header={this.props.about}/>
                <div className="container">
                    <p>KLFDJSA;FJDSAKL;FJDASK;LFJDKASL;</p>
                </div>
            </div>
        );
    }
}

export default About;