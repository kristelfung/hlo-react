import React, { Component } from 'react';
import Header from '../../Header';
import Button from '../../Button';

class Contact extends Component {
    render() {
        const contact = {
            title: "Contact Us",
            subtitle: "Reach out to us for assistance, job opportunities, and more!"
        }

        return(
            <div>
                <Header header={contact} />
                <div className="container infopage">
                    <div className="row">
                        <div className="col-md-5">
                            <h3 className="form-title">Leave a Message</h3>
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label for="comment">Message</label>
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Begin your message here..."></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary next">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-7 contact-info">
                            <div className="contact-content">
                            <p>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i></span> 
                                Room 1804 Jubilee Centre,
                                <br/>
                                18 Fenwick Street,
                                <br/>
                                Wai Chai, Hong Kong
                            </p>
                            <p>
                                <span><i className="fa fa-envelope" aria-hidden="true"></i></span> <a href="mailto:info@healthylovedones.com">info@healthylovedones.com</a>
                            </p>

                            <p>
                                <span><i className="fa fa-phone" aria-hidden="true"></i></span> <a href="tel:+852-9460-6940">+852-9460-6840</a>
                            </p>
                            <br/>
                            <p>
                                Interested in partnering?
                                <br/>
                                Send us your name, company name, phone contact, and partnership request.
                            </p>
                            <p>
                                <span><i className="fa fa-envelope" aria-hidden="true"></i></span> <a href="mailto:partner@healthylovedones.com">partner@healthylovedones.com</a>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;