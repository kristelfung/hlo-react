import React, { Component } from 'react';
import Header from '../../Header';

class Terms extends Component {
    render() {
        const terms = {
            title: "Terms of Service",
            subtitle: "Legal information and notices for the HLO service."
        }
        return(
            <div>
                <Header header={terms} />
                <div className="container infopage terms-content">
                    <h2>HealthyLovedOnes (HLO) Terms of Service</h2>
                    <p>Last updated: September 01, 2017</p>
                    <p>These Terms of Service govern the use of the service offered by Healthy Loved Ones Limited, a private limited liability company incorporated in Hong Kong (the “Company”) at the Company’s website (<a href="/">www.healthylovedones.com</a>) (the “Site”) or its mobile applications (if any) released from time to time. Such services, the Site and the mobile applications are hereinafter collectively referred to as the “Service”. Your use of the Service constitutes your acceptance of, and agreement to, all of the terms and conditions in these Terms of Service, the privacy policy (the “Privacy Policy”) available <a href="/privacy">here</a>, the community guidelines (the “Community Guidelines”) available <a href="/guidelines">here</a> and your representation that you are 18 years of age or older. If you object to anything in these Terms of Service, the Privacy Policy or the Community Guidelines, you are not permitted to use the Service. The Privacy Policy and the Community Guidelines are incorporated by reference into these Terms of Service, hence these Terms of Service, the Privacy Policy and the Community Guidelines are hereinafter collectively referred to as this “Agreement”.</p>
                    <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS. YOU ACKNOWLEDGE AND AGREE THAT, BY USING THE SERVICE OR BY DOWNLOADING OR POSTING ANY CONTENT FROM OR VIA THE SITE OR MOBILE APPLICATIONS (IF ANY) RELEASED BY THE COMPANY FROM TIME TO TIME, YOU ARE ACKNOWLEDGING THAT YOU HAVE READ, AND THAT YOU FULLY UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE, WHETHER OR NOT YOU HAVE REGISTERED WITH THE SITE OR MOBILE APPLICATION (IF ANY) RELEASED BY THE COMPANY FROM TIME TO TIME. IF YOU DO NOT AGREE WITH THESE TERMS OF SERVICE, YOU HAVE NO RIGHT TO ACCESS OR USE THE SERVICE. FAILURE TO USE THE SERVICE IN ACCORDANCE WITH THESE TERMS OF SERVICE MAY SUBJECT YOU TO CIVIL AND CRIMINAL PENALTIES.</p>
                    <br/>
                    <h4>1. Service Connects Caregivers and Clients</h4>
                    <span>1.1</span><p className="indented">The Company provides the Service by way of providing an online platform which enables the connection between Clients and Caregivers. “Clients” are individuals and/or businesses seeking to obtain home healthcare services (“HH Services”) from Caregivers and are therefore clients of Caregivers, and “Caregivers” are individuals and/or businesses seeking to perform HH Services for Clients. Clients and Caregivers together are hereinafter referred to as “Users”.</p>
                    <br/>
                    <h4>2. Service Only Provides a Venue</h4>
                    <span>2.1</span><p className="indented">The Service is a platform for enabling connections between Users for the offer, acceptance and entry into contractual arrangements for HH Services between the relevant Users, but the Company is not responsible for the performance of Users, nor does it have control over the quality, timing, legality, failure to provide, or any other aspect whatsoever of HH Services, nor of the integrity, responsibility or any of the actions or omissions whatsoever on the part of any Users. The Company does not have control over the quality, timing or legality of HH Services delivered by the Caregivers. The Company makes no representations about the suitability, reliability, timeliness, or accuracy of HH Services requested and provided by Users identified through the Service whether in public private, or offline interactions.</p>
                    <br/>
                    <span>2.2</span><p className="indented">YOU UNDERSTAND AND AGREE THAT ALL CONTRACTUAL OBLIGATIONS FOR HH SERVICES HAVE BEEN ENTERED INTO BETWEEN THE USERS ONLY AND THE COMPANY IS NOT A PARTY TO ANY CONTRACTUAL OBLIGATIONS BETWEEN YOU AND OTHER USERS. THE COMPANY DISCLAIMS ALL LIABILITY IN THIS REGARD TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>
                    <br/>
                    <h4>3. User Vetting</h4>
                    <span>3.1</span><p className="indented">Users (whether as a Client or as a Caregiver) must register with the Company and create an account to use the Service. Users may be subject to extensive vetting processes both at the registration stage and during their use of the Service. The Service is intended to be used solely by persons who meet the following criteria as well as other criteria imposed by the Company from time to time (the “Criteria”):</p>
                    <ol className="roman-lower">
                        <li>who is 16 years of age or older;</li>
                        <li>who has passed all verification or identity checks by theCompany, and</li>
                        <li>we also check credentials for Professionals and background checks for Non-professionals.</li>
                    </ol>
                    <br/>
                    <h4 className="indented">Professionals:</h4>
                    <p className="indented">HLO will check at two levels.</p>
                    <ol>
                        <li>First level is to check with their professional association to make sure they are a member in good standing.</li>
                        <li>Second level is to check with the Federation of Medical Societies of Hong Kong.</li>
                    </ol>
                    <p className="indented">
                        The Federation of Medical Societies of Hong Kong 
                        <br/>4/F Duke of Windsor Social Service Building
                        <br/>15 Hennessy Road, Wanchai, Hong Kong
                        <br/>Tel: +852-2527-8898
                        <br/>Website: <a href="www.fmshk.org">www.fmshk.org</a>
                    </p>
                    <br/>
                    <h4 className="indented">Non-Professionals:</h4>
                    <p className="indented">HLO will run the following background checks:</p>
                    <ol>
                        <li>Caregivers must present valid HKID or Passport. If Passport we will check if they have the correct working visas and paperwork.</li>
                        <li>Caregivers that work with children are required to get a Sexual Conviction Record Check (SCRC) from the Police HQ in Wanchai, 14F, 1 Albertson Road. HLO will issue them a letter which they must bring and include with their application. The cost is HKD115.00 and will take 7 days to get the results.</li>
                        <li>Caregivers that want a No Criminal Conviction record can apply for one through the relevant Consulate / Immigration Authority / Government Authority. They cannot apply direct with HLO and the results will be sent direct to the requested party. The Caregiver will only get a verbal result. Therefore, this background check is optional. The cost is HKD210.00 and will take 4 calendar weeks to get the results.</li>
                    </ol>
                    <br/>
                    <span>3.3</span><p className="indented">Any use of the Service by anyone who does not meet the Criteria is expressly prohibited. By using the Service, you represent and warrant that you can meet the Criteria and you will at all times during your use of the Service remain able to meet the Criteria. FOR THE AVOIDANCE OF DOUBT, THE COMPANY SHALL NOT HAVE ANY OBLIGATION TO VERIFY WHETHER OR NOT YOU HAVE MET THE CRITERIA AND THE COMPANY SHALL NOT ASSUME ANY LIABILITY, WHETHER BY WAY OF EXPRESS OR IMPLIED REPRESENTATION OR OTHERWISE, IN RESPECT OF ANY USER’S ABILITY TO MEET ANY OR ALL OF THE CRITERIA.</p>
                    <br/>
                    <span>3.4</span><p className="indented">Although the Company may perform verification or identity checks and background checks in respect of Users, as outlined above, the Company cannot confirm that each User is who they claim to be and therefore, the Company cannot and does not assume any responsibility for the accuracy or reliability of the identity or background check information or any information provided through the Service</p>
                    <br/>
                    <span>3.5</span><p className="indented">When interacting with other Users, you should exercise caution and common sense to protect your personal safety and property, just as you would when interacting with other persons whom you don’t know. NEITHER THE COMPANY NOR ITS AFFILIATES NOR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER OF THE SERVICE AND YOU HEREBY RELEASE THE COMPANY AND ITS AFFILIATES AND LICENSORS FROM ALL LIABILITY RELATED THERETO. THE COMPANY AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE SERVICE AND YOU AGREE TO IRREVOCABLY AND UNCONDITIONALLY WAIVE YOUR RIGHTS (IF ANY) TO INSTITUTE CLAIMS OR PROCEEDINGS AGAINST THE COMPANY, ITS AFFILIATES AND LICENSORS.</p>
                    <br/>
                    <span>3.6</span><p className="indented">In addition to satisfaction of the Criteria, if you are using the Service as a Caregiver, you understand and agree that your right to use the Service as a Caregiver will be subject to your completion of certain online and/or offline training courses (at your own costs and expenses) organized or otherwise arranged by the Company from time to time to the Company’s satisfaction.</p>
                    <br/>
                    <h4>4. Billing and Payment</h4>
                    <span>4.1</span><p className="indented">Users of the Service contract for HH Services directly with other Users. The Company is not and will not be a party to any contracts for HH Services.</p>
                    <br/>
                    <span>4.2</span><p className="indented">Users using the Service as Clients</p>
                    <p className="indented">The Company currently does not charge service fee for providing the Service to Clients. The Company reserves the right to later introduce service fee applicable to Clients in such manner and scale as specified by the Company. If the Company decides to introduce such service fee, the Company shall inform the Users accordingly by way of announcement in the Site (or through the Company’s mobile application) and allow its Users to terminate their use of the Service at their option. You agree that the announcements made by the Company in the Site or through the Company’s mobile application shall constitute valid and sufficient notice to you in respect of the subject matter thereof and your continued use of the Service following such announcement shall, despite of your actual awareness of the terms of the announcement, constitute your irrevocable acceptance to the service fee as announced by the Company.</p>
                    <br/>
                    <span>4.3</span><p className="indented">Users will be required to provide their credit card or bank account details to the Company so as to enable the Company to provide the Services, including but not limited to facilitating payment between the Clients and the Caregivers.</p>
                    <br/>
                    <span>4.4</span><p className="indented">Subject to Clause 4.5 of these Terms of Service, Clients will be responsible for paying the invoice for each HH Service (the “Invoice”), which will include (a) the pricing terms of the HH Service agreed with and provided by a Caregiver (“HH Service Payment”); (b) any out of pocket expenses agreed with and submitted by a Caregiver in connection with the HH Service; (c) any tip or gratuity, if applicable; and (d) the service fee of the Company (if any) for the Service.</p>
                    <br/>
                    <span>4.5</span><p className="indented">Upon the expiration of 24 hours commencing from the time the Client receives confirmation through the Service or via email that a HH Service has been completed, the Company shall be deemed to have the Client’s irrevocable authorization to process the relevant Invoice amount to make payment to the Caretaker unless the Client has within such timeframe indicated in writing that he/she/it is unsatisfied with the relevant HH Services, in which case the HealthyLovedOnes Guarantee as set forth in Clause 13B of these Terms of Service will apply.</p>
                    <br/>
                    <span>4.6</span><p className="indented">Users using the Service as Caregivers</p>
                    <p className="indented">(a) Users using the Service as Caregivers have the option to either (i) register a free account (which is not subject to any subscription fee) (“Free Account”) or (ii) register a paid account (which is subject to annual subscription fee, amount of which may be amended by the Company from time to time at the Company’s sole discretion) (“Paid Account”).</p>
                    <p className="indented">(b) Caregivers registered with a Free Account understand and agree that they shall pay to the Company a transaction fee equivalent to fifteen per cent (15%) of the HH Service Payment payable for each HH Service; whereas Caregivers registered with a Paid Account understand and agree that they shall pay to the Company a transaction fee equivalent to five per cent (5%) of the HH Service Payment payable for each HH Service.</p>
                    <p className="indented">(c) The Company has the sole discretion to amend the manner and scale of the transaction fee payable by the Caregivers to the Company from time to time.</p>
                    <br/>
                    <span>4.8</span><p className="indented">The Company reserves the right, in its sole discretion (but not the obligation), to (a) place on hold any HH Service Payment and out of pocket expenses; or (b) refund.</p>
                    <br/>
                    <span>4.9</span><p className="indented">HH Service Payment and related fees and expenses must be paid through the Service and may be paid using a Gift Card (see Clause 5 of these Terms of Service) in the Client’s sole discretion.</p>
                    <br/>
                    <span>4.10</span><p className="indented">Users of the Service will be liable for any taxes (including VAT, if applicable) required to be paid on the Service provided under the Agreement (other than taxes on the Company’s income).</p>
                    <br/>
                    <h4>5. Gift Cards and Vouchers</h4>
                    <span>5.1</span><p className="indented">The Company’s gift cards and certificates (the “Gift Cards”) and vouchers or promotional codes (the “Vouchers”) may be made available at the Company’s sole and absolute discretion and can be used to pay HH Service Payments and the Company fees in part or in full, but may not be used to pay for reimbursement of out of pocket expenses associated with a HH Service provided through the Service. Vouchers are an offer (subject to the terms of the voucher) by the Company to reduce the amount a Client has to pay in relation to a HH Service Payment and/or the Company’s fee. Vouchers will not affect the amount of the HH Service Payment a Caregiver ultimately receives. You understand and agree that any and all usage of the Vouchers will be subject to the terms and conditions of the Vouchers as applicable from time to time at the discretion of the Company.</p>
                    <br/>
                    <span>5.2</span><p className="indented">Client must enter each Gift Card into Client’s account in respect of its appropriate value before Client can use that value on the Service.</p>
                    <br/>
                    <span>5.3</span><p className="indented">Gift Cards are transferrable but not replaceable if lost or stolen and have no expiration date. Gift Cards have no cash value and are not redeemable for cash.</p>
                    <br/>
                    <span>5.4</span><p className="indented">A Gift Card cannot be used in combination with any other Gift Cards, gift certificates, Vouchers or other coupons. A Gift Card cannot be used as a credit or debit card. The Company reserves the right to limit quantities of Gift Cards purchased by any person or entity and to cancel a Gift Card without compensation to the holders thereof if it believes that the Gift Card was obtained through fraudulent or unauthorized means.</p>
                    <br/>
                    <span>5.5</span><p className="indented">No credit card, credit line, overdraft protection, or deposit account is associated with your Gift Card. You cannot “reload” (i.e., you cannot add value/balance to your Gift Card at this time). If a Gift Card holder's purchase exceeds the amount of that Gift Card's balance, the Gift Card holder must pay the difference by another means. Unused Gift Card balances are not transferable. The Company reserves the right to correct the balance of a Gift Card if the Company believes that a billing error has occurred. The Company disclaims all liability for any such billing errors. Gift Cards and their use are subject to these Terms of Service, the Privacy Policy and the Community Guidelines and use of a Gift Card constitutes acceptance hereof.</p>
                    <br/>
                    <h4>6. Release</h4>
                    <span>6.1</span><p className="indented">The Company is not involved in the actual performance and/or completion of the HH Service. Users understand and agree to release the Company (and our officers, directors, agents, investors, subsidiaries, and employees) from any and all claims, demands, or damages (actual or consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with any disputes between Users.</p>
                    <br/>
                    <span>6.2</span><p className="indented">The Company assumes no responsibility for any User’s compliance and/or non-compliance with any agreements with or duties owed to another User or third parties, or any applicable laws, rules or regulation, except to the extent otherwise provided for in Clauses 13A and 13B of these Terms of Service.</p>
                    <br/>
                    <h4>7. Public Areas; Acceptable Use</h4>
                    <span>7.1</span><p className="indented">The Service may contain profiles, email systems, blogs, message boards, applications, job postings, chat areas, news groups, forums, communities and/or other message or communication facilities (the “Public Areas”) that allow Users to communicate with other Users. You may only use such Public Areas to send and receive messages and materials that are relevant and proper to the applicable forum.</p>
                    <br/>
                    <span>7.2</span><p className="indented">Without limitation, while using the Service, you may not:</p>
                    <ul>
                        <li>use the Service for any commercial or other purposes that are not expressly permitted by these Terms of Service.</li>
                        <li>copy, store or otherwise access or use any information contained or via the Service for purposes not expressly permitted by these Terms of Service.</li>
                        <li>register an account on behalf of an individual other than yourself.</li>
                        <li>recruit or otherwise solicit any User to join third-party services that are competitive (directly or indirectly) to the Company without the Company’s prior written consent.</li>
                        <li>defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (including, but not limited to, rights of privacy and publicity) of others, including but not limited to the Company’s staff.</li>
                        <li>publish, post, upload, distribute or disseminate any profane, defamatory, infringing, obscene or unlawful topic, name, material or information.</li>
                        <li>use the Service for any purpose, including, but not limited to posting or completing a HH Service, in violation of any applicable laws and/or regulations.</li>
                        <li>upload files that contain software or other material that violates the intellectual property rights (or rights of privacy or publicity) of any third party.</li>
                        <li>upload files that contain viruses, Trojan horses, corrupted files, or any other similar software that may damage or alter the normal operation of computers, mobile phones or other electronic devices.</li>
                        <li>post or upload any content to which you have not obtained the necessary rights or permissions to so use.</li>
                        <li>advertise or offer to sell any goods or services for any commercial purpose through the Service which are not relevant to the HH Service offered through the Service.</li>
                        <li>conduct or forward surveys, contests, pyramid schemes, or chain letters.</li>
                        <li>impersonate another person or a User or allow any other person or entity to use your identification to post or view comments.</li>
                        <li>post the same HH Service repeatedly (the “Spamming”). Spamming is strictly prohibited.</li>
                        <li>download any file posted by another User that you know, or reasonably should know, cannot be legally distributed through the Service.</li>
                        <li>restrict or inhibit any other User from using and enjoying any of the Public Areas.</li>
                        <li>imply or state that any statements you make are endorsed by the Company, without the prior written consent of the Company.</li>
                        <li>use a robot, spider, manual and/or automatic processes or devices to data-mine, data- crawl, scrape or index the Service in any manner.</li>
                        <li>hack or interfere with the Service, its servers or any connected networks.</li>
                        <li>adapt, alter, license, sublicense or translate the Service for your own personal or commercial use.</li>
                        <li>remove or alter, visually or otherwise, any copyrights, trademarks or proprietary marks and rights owned by the Company.</li>
                        <li>upload content that is offensive and/or harmful, including, but not limited to, content that advocates, endorses, condones or promotes racism, bigotry, hatred or physical harm of any kind against any individual or group of individuals.</li>
                        <li>upload content that provides materials or access to materials that exploit people under the age of 18 in an abusive, violent or sexual manner.</li>
                        <li>use the Service in violation of the Community Guidelines.</li>
                        <li>use the Service to solicit any other business, website or service, or otherwise contact Users for employment, contracting or any purpose not related to use of the Service as set forth herein.</li>
                        <li>use the Service to collect usernames and/or email addresses of Users by electronic or other means.</li>
                        <li>register under different usernames or identities, after your account has been suspended or terminated.</li>
                    </ul>
                    <br/>
                    <span>7.3</span><p className="indented">You understand that all submissions made to Public Areas will be made public and that you will be publicly identified by your name or login identification when communicating in Public Areas, and the Company will not be responsible for the action of any Users with respect to any information or materials posted in Public Areas.</p>
                    <br/>
                    <h4>8. Termination and Suspension</h4>
                    <span>8.1</span><p className="indented">The Company may terminate or suspend your right to use the Service at any time for any or no reason by providing you with written or email notice of such termination, and termination will be effective immediately upon delivery of such notice.</p>
                    <br/>
                    <span>8.2</span><p className="indented">Without limitation, the Company may terminate or suspend your right to use the Service if you breach or the Company suspects you have breached any term of this Agreement (including the Community Guidelines) or any policy of the Company posted through the Service from time to time, or if the Company otherwise finds or suspects that you have engaged in inappropriate and/or offensive behavior. If the Company terminates or suspends your right to use the Service for any of these reasons, you will not be entitled to any refund of unused balance in your Gift Cards and/or Vouchers (if any). If the Company terminates or suspends your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, the Company reserves the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
                    <br/>
                    <span>8.3</span><p className="indented">Even after your right to use the Service is terminated or suspended, this Agreement will remain enforceable against you.</p>
                    <br/>
                    <span>8.4</span><p className="indented">You may terminate this Agreement at any time by ceasing all use of the Service. All clauses which by their nature should survive the expiration or termination of this Agreement shall continue in full force and effect subsequent to and notwithstanding the expiration or termination of this Agreement.</p>
                    <br/>
                    <h4>9. Account, Password, Security and Mobile Phone Use</h4>
                </div>
            </div>
        );
    }
}

export default Terms;