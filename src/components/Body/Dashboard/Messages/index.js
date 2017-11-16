import React, { Component } from 'react';
import moment from 'moment';

import MessageCompose from './MessageCompose'
import {getInbox, sendMessage, searchUser} from '../../../../api/api'

class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            open: false,
            data: [],
            from: props.userID
        };
        this.fetchInbox = this.fetchInbox.bind(this);
        this.fetchInbox();
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            from: nextProps.userID
        });
    }

    fetchInbox(){
        getInbox().then(json => {
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

    render(){
        return (
        	<div className="dashbody">
                <div className="container">
                    <a className="btn btn-primary" role="button" onClick={() => this.setState({open: true})}>Compose</a>
                    <MessageCompose fetchInbox={this.fetchInbox} open={this.state.open} onHide={() => this.setState({open: false})} fromUserID={this.state.from} />
                    <table className="inbox">
                        <tbody>
                            {
                                this.state.data.length > 0 ? 
                                this.state.data.map(message => <Message me={this.state.from} picURL={"localhost:1337"+message.from.profilePicUrl} loadMessage={this.props.loadMessage} key={message.id} message={message} />) :
                                <tr>
                                    <td> No messages! Click on the button above to start a conversation.. </td>
                                </tr>
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