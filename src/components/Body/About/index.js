import React, { Component } from 'react';
import Header from '../../Header';

// import images for dream team
import richard from '../../../images/about/richard.png';
import kateryna from '../../../images/about/kateryna.png';
import doug from '../../../images/about/doug.png';
import atman from '../../../images/about/atman.png';
import pakho from '../../../images/about/pakho.png';
import anita from '../../../images/about/anita.png';
import frederik from '../../../images/about/frederik.png';
import kristel from '../../../images/about/kristel.png';
import connor from '../../../images/about/connor.png';
import xgate from '../../../images/about/xgate.png';
import srinivas from '../../../images/about/srinivas.png';
import appit from '../../../images/about/appit.png';

// board of advisors 
import hku from '../../../images/about/hku.png';
import alfred from '../../../images/about/alfred.png';
import phillip from '../../../images/about/phillip.png';
import duncan from '../../../images/about/duncan.png';

class About extends Component {
    render() {

        const about = {
            title: "About",
            subtitle: "Learn more about HLO and the dream team behind it."
        }

        const team = [
            {
                image: richard,
                name: "Richard Au",
                title: "CEO and Founder",
                desc: "A black belt in professional solution sales.  His approach to sales is to meet people and to develop friendly and professional relationships. His sales philosophy is based on action and performance. Most recently helped 2 U.S. ISV’s expand their business successfully in Asia Pacific. Entrepreneurship is in his DNA.  He is the father of an Autistic child."
            }, 
            {
                image: kateryna,
                name: "Kateryna Portmann",
                title: "Co-Founder & Chief Business Officer",
                desc: "Entrepreneur with 9 years’ experience leading multiple work streams on complex projects and for startups.  Works in various senior management capacities including Chief Business Officer, Director of Business Development, Product Development Manager and Senior Business Analyst. Coordinates all strategic partnerships and investor relations. Works directly with co-founders and IT teams, mentors and advisors, partners and investors, the wider media, governmental institutions, and universities.  Also, an angel investor."
            },
            {
                image: doug, 
                name: "Doug Cheung",
                title: "Chief Strategic Officer",
                desc: "Doug Cheung has a dual background in academia and finance. Doug went to graduate school at Harvard (trained as a health data scientist) and has a wide range of scientific publications on virology, public health, health psychology and health care delivery. After his academic career, he went on to work at Horizons Venture, a leading global VC firm, focused on biotechnology and health care startup investments."
            },
            {
                image: atman,
                name: "Atman Chong",
                title: "Chief Operating Officer",
                desc: "Having spent the last 16 years of his career in various key roles in operations and finance with start-ups and MNC’s (ABB), Atman has decided to give back to society through a start-up. In his role as COO, Atman is responsible for Operations, IT, Finance and Legal."
            },
            {
                image: pakho,
                name: "Pak Ho Tang",
                title: "Chief Financial Officer",
                desc: "Business controller w/ MBA, CIMA & 15 years of experience in operational accounting including planning, directing and controlling activities. CFO of KC Korea, chain of six retail stores selling Korean cosmetics and products. Also operates a Café with Korean fusion food and drinks. Have worked for Alexander Wang, Jebsen Co., and Standard Chartered Bank."
            },
            {
                image: anita,
                name: "Anita Tsang",
                title: "Director of Education & Training, MS Nursing HK PolyU",
                desc: "Registered Nurse with over 30 years’ experience working at hospitals, NGO’s, and teaching various healthcare classes.  Bachelor’s Degree in Nursing from the University of Hong Kong.  She believes in the Tender Loving Care quality of service.  Her role is to develop and manage our Caregivers courses and to get accreditation.  Also, an angel investor."
            }, 
            {
                image: frederik,
                name: "Frederik Goossens",
                title: "UX/UI Senior Manager",
                desc: "Frederik is a technical-creative thinker with a passion for anything digital and design related and holds a M.Sc. in Commercial Sciences. Over the past couple of years, he has been working for large organisations such as BT, Westpac, HSBC, Manulife, among others. Additionally, Frederik has lived and worked in Belgium, UK, and Australia. Because of his interest in healthcare and hospitality, he is thrilled to be part of the HLO team where he will be pushing for the best user experience possible."
            },
            {
                image: kristel,
                name: "Kristel Fung",
                title: "Front-end Developer",
                desc: "Exposed to web technologies at a young age, Kristel is an aspiring front-end developer and designer. She's always looking to build something new, and hopes to pursue software development in the future as a career. She believes in creating accessible and user-friendly interfaces, and hopes to use software to solve problems and improve the everyday lives of people."
            },
            {
                image: connor,
                name: "Connor Doyle",
                title: "Digital Marketing Specialist",
                desc: "My long-term goal is to design cutting edge marketing strategies that utilize the integration of new tech in our daily lives and take advantage of machine learning systems.  When I'm not diving through the digital world, I love to be active in the outdoors.  My three favorite hobbies are snow skiing, sailing, and painting, though I'm not a very good painter...yet!"
            },
            {
                image: xgate,
                name: "XGATE",
                title: "Digital Marketing Agency",
                desc: "A digital marketing agency that offers a complete range of marketing solutions with our flagship product, Digital Marketing Services (DMS) platform. DMS delivers a diverse range of multi-channel marketing (Mobile, Email, Social & Web) and technology services to clients with different digital marketing needs."
            },
            {
                image: srinivas,
                name: "Srinivas Reddy Chinta",
                title: "Director of IT",
                desc: "With over 25 years’ experience in IT from project management, software development, to database development and maintenance. He used to live in Hong Kong, but now lives in Hyderabad, India. He works with a small team of designers and developers in India."
            },
            {
                image: appit,
                name: "APP IT",
                title: "Mobile and Web Development",
                desc: "We are a team of passionate professionals, determined to build and deliver high quality & affordable mobile application solutions.  The final end product comes out to be exceedingly interactive, user-friendly and exquisite, offering a wide variety of functions and efficient design to help achieve your business goals."
            }
        ]

        const board = [
            {
                image: hku,
                name: "Dr. Angel C.K. Lee",
                title: "BNurs CUHK, MBA (HSM) HULL; MMedSci, PhD HK; RN; RGN; RN Teacher FPHKAN",
                desc: "College Senior Lecturer The University of Hong Kong.  Her nursing, medical and teaching experience ensures quality control of our Caregivers courses."
            },
            {
                image: alfred,
                name: "Alfred Yuen",
                title: "HK Data Centre",
                desc: "A seasoned veteran of the ICT industry, held senior IT management positions at KMB, SCMP, and Tradelink.  Also, a cancer survivor and understands the need for good home caregiving.  He wants to give back to society and become a Social Hero.  Also, our angel investor with a huge heart."
            },
            {
                image: phillip,
                name: "Phillip Portmann",
                title: "CEO Fundinfo",
                desc: "Fintech Company provides world’s largest libraries of fund documents, data, ratings and fund manager videos. Set up an account and receive automatic email updates aggregated from hundreds of the industry’s largest fund houses – all free of charge.  Husband of Kateryna, a super smart and good guy."
            },
            {
                image: duncan,
                name: "Duncan Au",
                title: "Chairman DEKS Air Group",
                desc: "DEKS Air Group is the GSA for over 20 airlines across Asia Pacific. He handles both passenger and cargo revenues. DEKS Air Group is over 45 years old and is considered one of the godfather’s in the aviation business. My Father and always the big boss."
            }
        ]

        return (
            <div>
                <Header header={about}/>
                <div className="container infopage">
                    <h2>What is HLO?</h2>
                    <p>HealthyLovedOnes is a social enterprise with a non-profit charity component. HLO is a P2P (people to people) platform for healthcare. We believe neighbors can help neighbors, in the spirit of the Good Samaritan and the power to make a difference in all of us. The resources and solution is right in front of our eyes, people just need someone to help them connect the dots.</p>
                    <ul>
                        <li>Caregivers</li>
                        <li>Patients</li>
                        <li>Family Members</li>
                        <li>Business Partners</li>
                    </ul>
                    <p>Problem we are solving – helping people find the right Caregivers for their Loved Ones. Sounds like no big deal, but it’s a big deal. We match by location, personality and work experience. To make this happen you have to think out of the box and break the rules. We are the disruptor, our service and business models are the most innovative for the healthcare industry.</p>
                    <p>Our goal is to deliver the best homecare service provided by Professional Caregivers fully vetted, background checked, and trained by HLO.  We want the service to be fast, easy, and affordable.  We believe in Tender Loving Care (TLC) attitude and spirit when it comes to caregiving.  TLC means compassion, empathy, and dignity.  We all have to help, work, and care for each other.  It’s about empowering social heroes to help their neighbors and communities.</p>
                    <p>We break the rules, we're the disruptors, we create new useful and innovative products and services that can positively impact civil society and its community.  We hate bureaucracy, inefficiency, apathy and complacency.  We love user friendly, fast, efficient, flexible, and uncompromising quality service.</p>
                    <br/>

                    <h2>Management Team</h2>
                    {team.map(function(e){
                        return (
                        <div className="row dreamteam">
                            <div className="col-sm-2">
                                <img src={e.image} />
                            </div>
                            <div className="col-sm-10">
                                <h4>{e.name}</h4>
                                <h5>{e.title}</h5>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                        )
                    })}

                    <br/>

                    <h2>Board of Advisors</h2>
                    {board.map(function(e){
                        return (
                        <div className="row dreamteam">
                            <div className="col-sm-2">
                                <img src={e.image} />
                            </div>
                            <div className="col-sm-10">
                                <h4>{e.name}</h4>
                                <h5>{e.title}</h5>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default About;