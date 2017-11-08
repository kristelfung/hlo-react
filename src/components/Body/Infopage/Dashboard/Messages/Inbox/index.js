import React, { Component } from 'react';
import MessageRow from './MessageRow';

class Inbox extends Component {
    render() {
        return(
            <div className="container">
                <table>
                    <MessageRow/>
                </table>
            </div>
        );
    }
}

export default Inbox;