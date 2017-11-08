import React, { Component } from 'react';
import moment from 'moment';

import {getInbox} from '../../../../api/api'

class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            data: []
        };

        getInbox("5a02fdf9b108b228357e5542").then(json => {
            console.log(json);
            this.setState({
                loading: false,
                data: json
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });
    }

    render(){
        return (
        	<div className="dashbody">
                <div className="container">
                    <a className="btn btn-primary" data-toggle="modal" data-target="#myModal" role="button">Compose</a>
                    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Compose Message</h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="recipient">Recipient</label>
                                            <input type="text" className="form-control" id="recipient" placeholder="Recipient" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea type="text" className="form-control" rows="5" id="message" placeholder="Write your message here..."></textarea>
                                        </div>    
                                        <div className="submit-buttons">       
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>                                
                                            <button type="submit" className="btn btn-primary">Send</button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                        <table className="inbox">
                        <tbody>
                            {
                                this.state.data.map(message => <Message key={message.id} {...message} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class Message extends Component{
    render(){
        //TODO image of sender
        return(
            <tr className="inbox-message read">
                <td className="image-td">
                    <img src="images/msg.png" className="message-pic"/>
                </td>
                <td>
                    <p className="message-author">{this.props.from.firstName} {this.props.from.lastName}</p>
                    <p className="message-time">{moment(this.props.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </td>
                <td className="message-contents">
                    <p className="message-title">{this.props.threadSubject}</p>
                    <p className="message-preview">{this.props.replies[this.props.replies.length - 1].messageBody.substring(0, 30)}</p>
                </td>
            </tr>
        );  
    //     <td>
    //     <i className="fa fa-circle" aria-hidden="true"></i> 
    // </td>      
    }
}

export default Messages;