import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import moment from 'moment';
import debounce from 'debounce';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {getInbox, sendMessage, searchUser} from '../../../../api/api';

class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            open: false,
            data: [],
            from: props.userID,
            to: "",
            message: "",
            subject: "",
        };

        this.fetchInbox = this.fetchInbox.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        this.fetchInbox();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            from: nextProps.userID
        });
    }

    fetchInbox(){
        getInbox().then(json => {
            console.log(json);
            this.setState({
                loading: false,
                data: json.data
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });
    }

    sendMessage(e){
        e.preventDefault();
        let message = {
            from: this.state.from,
            to: this.state.to,
            threadSubject: this.state.subject,
            replies: [{
                from: this.state.from,
                to: this.state.to,
                messageBody: this.state.message
            }]
        }

        console.log(message);
        
        sendMessage(message).then(json => {
            this.fetchInbox();
        }).catch(err => {
        });

        this.setState({
            open: false,
            to: "",
            subject: "",
            message: ""
        });
    }

    getOptions(e){
        return searchUser(e).then(json => {
            console.log(json);
            return { options: json };
        }).catch(err => {
        });
    }

    render(){
        return (
        	<div className="dashbody">
                <div className="container">
                    <a className="btn btn-primary" role="button" onClick={() => this.setState({open: true})}>Compose</a>
                    <Modal show={this.state.open} onHide={() => this.setState({open: false})}>
                        <Modal.Header >
                            <Modal.Title>Compose Message</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient">Recipient</label>
                                    <Select.Async
                                        id="recipient" 
                                        placeholder="Recipient"
                                        name="form-field-recipient"
                                        value={this.state.to} onChange={(e) => this.setState({to: e.value})}
                                        loadOptions={debounce(this.getOptions, 800)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea type="text" className="form-control" rows="5" id="message" placeholder="Write your message here..." value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}></textarea>
                                </div>    
                                <div className="submit-buttons">       
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => this.setState({open: false})}>Close</button>                                
                                    <button type="submit" className="btn btn-primary" onClick={this.sendMessage}>Send</button>
                                </div> 
                            </form>
                        </Modal.Body>
                    </Modal>
                    <table className="inbox">
                        <tbody>
                            {
                                this.state.data.map(message => <Message me={this.state.from} picURL={"localhost:1337"+message.from.profilePicUrl} loadMessage={this.props.loadMessage} key={message.id} message={message} />)
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
        let fullName = "";
        let myLastReadTime = "";
        let lastUpdateTime = moment(this.props.message.updatedAt);
        if(this.props.message.from.id === this.props.me){
            fullName = this.props.message.to.firstName + " " + this.props.message.to.lastName;
            myLastReadTime = moment(this.props.message.lastReadFrom);
        }else{
            fullName = this.props.message.from.firstName + " " + this.props.message.from.lastName;
            myLastReadTime = moment(this.props.message.lastReadTo);
        }

        let messageBody = this.props.message.replies[this.props.message.replies.length - 1].messageBody;
        if(messageBody.length > 30) messageBody = messageBody.substring(0, 30) + "....";

        return(
            <tr className={myLastReadTime.isBefore(lastUpdateTime) ? "inbox-message" : "inbox-message read"}  onClick={() => this.props.loadMessage(this.props.message)}>
                <td className="image-td">
                    <img src={this.props.picURL} className="message-pic"/>
                </td>
                <td>
                    <p className="message-author">{fullName}</p>
                    <p className="message-time">{moment(this.props.message.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </td>
                <td className="message-contents">
                    <p className="message-title">{this.props.message.threadSubject}</p>
                    <p className="message-preview">{messageBody}</p>
                </td>
                    <td>
                        {
                            myLastReadTime.isBefore(lastUpdateTime) &&
                            <i className="fa fa-circle" aria-hidden="true"></i> 
                        }
                    </td> 
            </tr>
        );  
    }
}

export default Messages;