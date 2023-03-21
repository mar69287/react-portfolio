import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import code from '../../assets/code-profile.jpg'
import little from '../../assets/little-learners.jpg'
import poker from '../../assets/texas-poker.jpg'
import insight from '../../assets/insight-home.jpg'

export default function Projects() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="projects">
            <h2 data-aos='fade-up' className="titles">Projects</h2>
            <div data-aos='fade-up' className="project-content">
                <div style={{ position: 'relative' }} className="project-details flex-column-left">
                    <h2>InSight</h2>
                    <div>
                        <p className="project-description left-align">A company management app, offers streamlined tracking and analysis of business metrics for multiple companies, with a user-friendly interface for optimized performance. Manage multiple companies' sales, revenue, orders, inventory, and employee data with ease.</p>
                    </div>
                    <div>
                        <ul className="flex-row-start">
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Stripe API</li>
                            <li>Nivo</li>
                            <li>Full Calendar</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-start">
                            <li><a href="https://github.com/mar69287/InSight" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                            <li><a className="demo" href="https://insight-official.herokuapp.com/" target="_blank">Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="project-image">
                    <img src={insight} alt="Project Image" />
                </div>
            </div >
            <div data-aos='fade-up' className="project-content">
                <div className="project-image">
                    <img src={code} alt="Project Image" />
                </div>
                <div className="project-details flex-column-right">
                    <h2>Code Universe</h2>
                    <div>
                        <p className="project-description right-align">This social media application provides a collaborative and inclusive platform for developers to connect, share knowledge, and work together on projects and competitions, ultimately promoting innovation and productivity in the field of software development, while providing opportunities for networking, learning, and career advancement.</p>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li>Node</li>
                            <li>Express</li>
                            <li>OAuth</li>
                            <li>MongoDB</li>
                            <li>Heroku</li>
                            <li>News Api</li>
                            <li>Kontests Api</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li><a className="demo" href="https://code-universe.herokuapp.com/" target="_blank">Demo</a></li>
                            <li><a href="https://github.com/mar69287/Code-Universe" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div data-aos='fade-up' className="project-content">
                <div style={{ position: 'relative' }} className="project-details flex-column-left">
                    <h2>Little Learners</h2>
                    <div>
                        <p className="project-description left-align">Collaborated with a team of three to develop a web-based student management application for preschools that enables efficient and transparent communication between teachers and guardians, while providing data-driven insights to support student success.</p>
                    </div>
                    <div>
                        <ul className="flex-row-start">
                            <li>Heroku</li>
                            <li>Python</li>
                            <li>PostrgreSQL</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-start">
                            <li><a href="https://github.com/mar69287/little-learners" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                            <li><a className="demo" href="https://littlelearners.herokuapp.com/" target="_blank">Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="project-image">
                    <img src={little} alt="Project Image" />
                </div>
            </div >
            <div data-aos='fade-up' className="project-content">
                <div className="project-image">
                    <img src={poker} alt="Project Image" />
                </div>
                <div className="project-details flex-column-right">
                    <h2>Texas Hold'em Poker</h2>
                    <div>
                        <p className="project-description right-align">A web-based card game that not only provides entertainment and relaxation but also offers numerous benefits such as developing strategic thinking, decision-making, and risk assessment. Making it a fun and engaging way to unwind while improving cognitive abilities.</p>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li><a className="demo" href="https://mar69287.github.io/Texas-Holdem-Poker/" target="_blank">Demo</a></li>
                            <li><a href="https://github.com/mar69287/Texas-Holdem-Poker" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    )
}