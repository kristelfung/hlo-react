import React, { Component } from 'react';

import twitter from '../../images/logos/social/twitter.png';
import facebook from '../../images/logos/social/facebook.png';
import googleplus from '../../images/logos/social/googleplus.png';
import linkedin from '../../images/logos/social/linkedin.png';

class Footer extends Component {
    render(){
        return (
            <div>
            <div class="container-fluid footer-top">
                <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h3>Quick Links</h3>
                        <ul class="list-unstyled">
                            <li>How it works</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Insurance Policy</li>
                            <li>Community Guidelines</li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h3>Company</h3>
                        <ul class="list-unstyled">
                            <li>About Us/Dream Team</li>
                            <li>Contact Us</li>
                            <li>Q&amp;A with CEO</li>
                            <li>Careers/Be a True Believer</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 logo-container">
                        <img src={twitter} class="footer-logo"/>
                        <img src={facebook} class="footer-logo"/>
                        <img src={googleplus} class="footer-logo"/>
                        <img src={linkedin} class="footer-logo"/>
                    </div>
                </div>
                </div>
            </div>
            <div class="footer-bottom text-center">
                <p>Copyright &copy; 2015 Healthy Loved Ones. All Rights Reserved.</p>
            </div>
            </div>
        );
    }
}

export default Footer;
