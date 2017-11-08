import React, { Component } from 'react';

class MessageRow extends Component {
    render(){
        return(
            <tr>
                <td className="message-pic">
                    <p>John Smith</p>
                    <p>Nov 10</p>
                </td>
                <td>time stamp</td>
                <td>.</td>
            </tr>
        );
    }
}

export default MessageRow;