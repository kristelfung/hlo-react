import React, { Component } from 'react';
import Header from '../../Header';
import Infobody from './Infobody';

class Infopage extends Component {
    render() {
        return (
            <div>
                <Header header={this.props.header}/>
                <Infobody/>
            </div>
        );
    }
}

export default Infopage;