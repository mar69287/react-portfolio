import Lottie from "lottie-react";
import animationPerson from '../../lottie-files/about.json'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWrench, FaCode, FaHtml5 } from 'react-icons/fa';

export default function Header() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="flex-center" id="about">
            <section className="flex-row-center" id="about-me">
                <div>
                    <h2 data-aos="fade-up" >About Me</h2>
                    <p data-aos="fade-right">Hello! My name is Marco, and I am a Mechanical Engineer turned Developer. I was introduced to Arduino and MATLAB during my time at Cal State University Northridge, which led me to discover an interest for programming. I realized that my true calling was in the field of development, so I made the decision to join a coding bootcamp to further my skills.</p>
                    <p data-aos="fade-right">Outside of programming, I love the outdoors. From camping, to playing sports, to just taking a drive with my beautiful dog. Favorite sports team is FC Barcelona. Visca Barca!</p>
                </div>
                <div>
                    <Lottie data-aos="fade-up" id="my-lottie" animationData={animationPerson} loop={true} />
                </div>
            </section>
            <section data-aos="fade-up" className="flex-center" id="tools">
                
                    <h2>My Skills</h2>
                
                <div className="tech-container">
                    <div className="tech-card">
                        <div className="tech-header">
                            <div className="tech-icon"><FaHtml5 /></div>
                            <h3>Front End</h3>
                        </div>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Chakra-Ui</li>
                            <li>Material-UI</li>
                            <li>Bootstrap</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="tech-card">
                        <div className="tech-header">
                            <div className="tech-icon"><FaCode /></div>
                            <h3>Back End</h3>
                        </div>
                        <ul>
                            <li>Express</li>
                            <li>Node</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="tech-card">
                        <div className="tech-header">
                            <div className="tech-icon"><FaWrench /></div>
                            <h3>Other</h3>
                        </div>
                        <ul>
                            <li>Git</li>
                            <li>Github</li>
                            <li>ROS</li>
                            <li>Arduino</li>
                            <li>MATLAB</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}
