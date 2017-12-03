import React, { Component } from 'react';
import Header from '../../Header';

class QandA extends Component {
    render() {
        const qanda = {
            title: "Q&A with CEO",
            subtitle: "More information that the CEO has on the HLO platform."
        }

        return(
            <div>
                <Header header={qanda}/>
                <div className="container infopage">
                    <h3>Why did you start HLO?  What’s your motivation?</h3>
                    <p>HLO is not about ego, fame, or even making a lot of money. For me personally, it was about creating a new and useful service that can actually help people and make a difference in their lives. That’s a huge statement and promise.</p>
                    <br/>
                    <h3>So what exactly does HLO provide?</h3>
                    <p>Basically we’re a platform service provider focusing on homecare (health, wellness, and prevention). Our goal is to build the biggest and best supply of Caregivers, these can be medical professionals and private citizens. I call them my invisible army of social heroes.</p>
                    <br/>
                    <h3>What do you mean by best supply?</h3>
                    <p>To us best means best service, TLC service.  Healthcare is so personal and so important to the person receiving this service.  If it was your loved ones would you want the very best?  Absolutely, so how does HLO find you the right Caregiver?</p>
                    <p>We actually screen, vet, and background check all potential Caregivers.  They have to complete and pass our on-boarding process which includes specialized Caregiver’s training in eldercare, child care, and baby care. Also, they have to learn our unique approach to Tender Loving Care service, it’s about making a connection with the patients. To show them we really care and want to help, this attitude and spirit must come from the heart. We call this LQ or Love Quotient when it comes to job aptitude. Not everyone is suited for this type of job. We look for people with big hearts and is willing to be of service and open minded to making new connections and friends.</p>
                    <br/>
                    <h3>What makes HLO different from current operators?</h3>
                    <p>Wow, where do I start? Easy to use, fast, reliable, more affordable, better prices, better selection, better service, better everything. We actually have the best Customer Care and Caregiver Plans in the business. This includes insurance in case of accidents, training for our Caregivers so that we can deliver 5 stars TLC service, and finally our special Customer Service Guarantee. What this means is if you’re not fully satisfied with our service you don’t have to pay. We actually put our money where our mouth is.</p>
                    <p>Other innovative and unique benefits include Volunteer Caregivers and Nursing Students. Who knows you might be lucky and have both types of Caregivers as one of your neighbors. We truly believe in the power or good people and community giving and spirit.</p>
                    <p>We just want to be part of the solution and help empower people to get involved, together we can make a difference and change the world.</p>
                    <br/>
                    <h3>Why should I join HLO?</h3>
                    <p>First of all joining us either as a Customer or Caregiver is completely free of charge. Once you join we will empower you to change your life. Do you want to be part of the solution that helps civil society and people’s lives?</p>
                    <br/>
                    <p>Caregiver’s benefits:</p>
                    <ul>
                        <li>To learn something new and worthwhile</li>
                        <li>To help yourself and other people</li>
                        <li>To be of service and feel good about it</li>
                        <li>To earn income and improve your economics</li>
                        <li>To be part of the solution and something bigger than yourself</li>
                        <li>To help your Loved Ones</li>
                    </ul>
                    <br/>
                    <p>Customer's benefits:</p>
                    <ul>
                        <li>To find the right Caregivers for your Loved Ones</li>
                        <li>To save money, time, and headaches</li>
                        <li>Peace of mind and the freedom to do more</li>
                        <li>Healthier and happier lives for everyone</li>
                    </ul>
                    <br/>
                    <h3>Why me, yes I’m talking about YOU?</h3>
                    <p>Because life is short and don’t you want to make a difference?  Do you believe that change is hard but possible? Do you believe in the power of positive thinking and being of service? Do you have Loved Ones that you really care about?</p>
                </div>
            </div>
        );
    }
}

export default QandA;