import React, { Component } from 'react';
import moment from 'moment';

import {baseUrl} from '../../../../../api/api'
import placeholder from '../../../../../images/profile-placeholder.png'

class MessageBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
        };

        this.reply = this.reply.bind(this);
    }

    reply(e){
        e.preventDefault();
        let msg = {
            messageBody: this.state.message,
            thread: this.props.id,
            from: this.props.userID,
            to: this.props.userID === this.props.from.id ? this.props.to.id : this.props.from.id
        };
        if(this.props.userID === this.props.from.id) msg.lastReadFrom = moment().add(5, 'seconds').format();
        else msg.lastReadTo = moment().add(5, 'seconds').format();

        this.props.reply(msg);
        this.setState({
            message: "",
        });
    }

    render(){
        this.props.replies.forEach(function(reply) {
            if(reply.from !== this.props.from.id){
                reply.profilePicUrl = this.props.to.profilePicUrl === undefined ? placeholder : baseUrl + this.props.to.profilePicUrl;
                reply.fullName =  this.props.to.firstName + " " +this.props.to.lastName;
            }else{
                reply.profilePicUrl = this.props.from.profilePicUrl === undefined ? placeholder : baseUrl + this.props.from.profilePicUrl;
                reply.fullName =  this.props.from.firstName + " " +this.props.from.lastName; 
            }
        }, this);

        return(
            <div className="dashbody">
                <div className="container">
                    <h3>{this.props.threadSubject}</h3>
                    <h5>{moment(this.props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                    <div className="all-messages">
                        {
                            this.props.replies.map((reply, idx) => <Reply key={idx} {...reply} />)
                        }
                    </div>
                    <form>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" id="reply" placeholder="Enter your reply here..." value={this.state.message} onChange={e=>this.setState({message: e.target.value})}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.reply}>Reply</button>
                    </form>
                </div>
            </div>
        );
    }
}

class Reply extends Component{
    render(){
        return(
            <div className="message-body">
                <img src={this.props.profilePicUrl}/>
                <h4>{this.props.fullName}</h4>
                <h6>{moment(this.props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                <p>{this.props.messageBody}</p>
            </div>
        );
    }
}


export default MessageBody;