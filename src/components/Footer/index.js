import React, { Component } from 'react';

import twitter from '../../images/logos/social/twitter.png';
import facebook from '../../images/logos/social/facebook.png';
import googleplus from '../../images/logos/social/googleplus.png';
import linkedin from '../../images/logos/social/linkedin.png';

class Footer extends Component {
    render(){
        return (
            <div>
            <div className="container-fluid footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Insurance Policy</li>
                            <li><a href="guidelines">Community Guidelines</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>Company</h3>
                        <ul className="list-unstyled">
                            <li><a href="about">About Us/Dream Team</a></li>
                            <li>Contact Us</li>
                            <li>Q&amp;A with CEO</li>
                            <li>Careers/Be a True Believer</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 logo-container">
                        <img src={twitter} className="footer-logo"/>
                        <img src={facebook} className="footer-logo"/>
                        <img src={googleplus} className="footer-logo"/>
                        <img src={linkedin} className="footer-logo"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>Copyright &copy; 2015 Healthy Loved Ones. All Rights Reserved.</p>
            </div>
            </div>
        );
    }
}

export default Footer;
