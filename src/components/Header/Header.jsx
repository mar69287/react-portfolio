import Lottie from "lottie-react";
import animationHome from '../../lottie-files/home.json'

export default function Header() {


    return (
        <section className="flex-column-left" id="top">
            <div style={{ position: 'relative' }}>
                <h1>Marco Ruiz</h1>

                <div className="wrapper">
                    <div className="static-text">I am a </div>
                    <ul className="dynamic-texts">
                        <li><span>Full-Stack Developer</span></li>
                    </ul>
                </div>
                <a className="demo flex-row-center" href="#contact">Reach Me</a>
                <Lottie className="home-lottie" animationData={animationHome} loop={true} />
            </div>
        </section>
    )
}