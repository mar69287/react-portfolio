import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import little from '../../assets/little-learners.jpg'
import insight from '../../assets/insight-home.jpg'
import tiendamaya from '../../assets/tienda-maya.jpg'

export default function Projects() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="projects">
            <h2 data-aos='fade-up' className="titles">Projects</h2>
            <div data-aos='fade-up' className="project-content">
                <div style={{ position: 'relative' }} className="project-details flex-column-left">
                    <h2>DevConnect</h2>
                    <div>
                        <p className="project-description left-align">Struggling to break into tech?</p>
                        <p className="project-description left-align">This social media app is your go-to platform for developers seeking collaboration, knowledge sharing, and networking opportunities. It fosters innovation and career growth within the software development community, providing a vibrant hub for like-minded individuals to connect and thrive.</p>
                    </div>
                    <div>
                        <ul className="flex-row-start">
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Chat Engine</li>
                            <li>Chakra UI</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-start">
                            <li><a href="https://github.com/mar69287/devConnect/tree/main" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                            <li><a className="demo" href="https://devconnect-social-d5ad076571e6.herokuapp.com/" target="_blank">Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="project-image">
                    <img src={insight} alt="Project Image" />
                </div>
            </div >
            <div data-aos='fade-up' className="project-content">
                <div className="project-image">
                    <img src={tiendamaya} alt="E-commerce" />
                </div>
                <div className="project-details flex-column-right">
                    <h2>Tienda Maya</h2>
                    <div>
                        <p className="project-description right-align">Tienda Maya is an online marketplace that brings together my Guatemalan culture with modern tastes and trends. It allows buyers to login, browse through multiple categories of products, pick out items, add them to a cart, and ensure secure payment processing.</p>
                        <br/>
                        <p className="project-description right-align">Demo account and card information provided in the application.</p>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>JWT</li>
                            <li>Chakra-UI</li>
                            <li>Stipe API</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li><a className="demo" href="https://zen-cart.herokuapp.com/" target="_blank">Demo</a></li>
                            <li><a href="https://github.com/mar69287/ZenCart" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
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
                    <img src={little} alt="Project Image" />
                </div>
                <div style={{ position: 'relative' }} className="project-details flex-column-right">
                    <h2>Little Learners</h2>
                    <div>
                        <p className="project-description right-align">Collaborated with a team of three to develop a web-based student management application for preschools that enables efficient and transparent communication between teachers and guardians, while providing data-driven insights to support student success.</p>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li>Heroku</li>
                            <li>Python</li>
                            <li>PostrgreSQL</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-row-end">
                            <li><a href="https://github.com/mar69287/little-learners" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                            <li><a className="demo" href="https://littlelearners.herokuapp.com/" target="_blank">Demo</a></li>
                        </ul>
                    </div>
                </div>
            </div >
            {/* <div data-aos='fade-up' className="project-content">
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
            </div > */}
        </section >
    )
}