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
                            <li><a href="/terms">Terms of Use</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/insurance">Insurance Policy</a></li>
                            <li><a href="/guidelines">Community Guidelines</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>Company</h3>
                        <ul className="list-unstyled">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/QandA">Q&amp;A with CEO</a></li>
                            <li><a href="/press">Press</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/newsletter">Newsletter</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 logo-container">
                        <a href="https://twitter.com/HLO_Caregivers" target="_blank"><img src={twitter} className="footer-logo"/></a>
                        <a href="https://www.facebook.com/HealthyLovedOnes/" target="_blank"><img src={facebook} className="footer-logo"/></a>
                        <a href="https://plus.google.com/100191372468559259757?hl=zh-TW" target="_blank"><img src={googleplus} className="footer-logo"/></a>
                        <a href="https://www.linkedin.com/company/10427051/" target="_blank"><img src={linkedin} className="footer-logo"/></a>
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
