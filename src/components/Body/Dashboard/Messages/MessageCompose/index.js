import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import debounce from 'debounce';
import Select from 'react-select';

import {sendMessage, searchName} from '../../../../../api/api'

class MessageCompose extends Component{
    constructor(props){
        super(props);
        this.state = {
            from: props.fromUserID,
            to: props.toUserID,
            message: "",
            subject: "",
        };
        this.sendMessage = this.sendMessage.bind(this);        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            from: nextProps.fromUserID,
            to: nextProps.toUserID,
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
        sendMessage(message);

        this.setState({
            to: "",
            subject: "",
            message: ""
        });

        this.props.onHide();
        if(this.props.fetchInbox !== undefined)
            setTimeout(this.props.fetchInbox, 500);
    }

    getOptions(e){
        return searchName(e).then(json => {
            console.log(json.data);
            return { options: json.data };
        }).catch(err => {
            return err;
        });
    }

    render(){
        return(
            <Modal show={this.props.open} onHide={this.props.onHide}>
                <Modal.Header >
                    <Modal.Title>Compose Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        {
                            this.props.toUserID === undefined && 
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
                        }
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" className="form-control" rows="5" id="message" placeholder="Write your message here..." value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}></textarea>
                        </div>    
                        <div className="submit-buttons">       
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onHide}>Close</button>                                
                            <button type="submit" className="btn btn-primary" onClick={this.sendMessage}>Send</button>
                        </div> 
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default MessageCompose;