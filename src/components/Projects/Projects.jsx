import code from '../../images/code-profile.jpg'
import little from '../../images/little-learners.jpg'
import poker from '../../images/texas-poker.jpg'

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="titles">Projects</h2>
            <div className="project-content">
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
            <div className="project-content">
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
            <div className="project-content">
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