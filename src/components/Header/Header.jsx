import Lottie from "lottie-react";
import animationHome from '../../lottie-files/home.json'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="flex-column-left" id="top">
            <div style={{ position: 'relative' }}>
                <h1 data-aos='fade-right'>Marco Ruiz</h1>

                <div data-aos='fade-right' className="wrapper">
                    <div className="static-text">I am a </div>
                    <ul className="dynamic-texts">
                        <li><span>Full-Stack Developer</span></li>
                    </ul>
                </div>
                <a data-aos='fade-right' className="demo flex-row-center" href="#contact">Reach Me</a>
                <Lottie data-aos='fade-left' className="home-lottie" animationData={animationHome} loop={true} />
            </div>
        </section>
    )
}