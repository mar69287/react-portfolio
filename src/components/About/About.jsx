import Lottie from "lottie-react";
import animationPerson from '../../lottie-files/about.json'
import javascript from '../../assets/logo-javascript.svg'
import node from '../../assets/nodejs-icon.svg'
import express from '../../assets/icons8-express-js.svg'
import mongo from '../../assets/mongodb-icon-1.svg'
import python from '../../assets/python-5.svg'
import django from '../../assets/django-community.svg'
import post from '../../assets/postgresql.svg'
import react from '../../assets/react-2.svg'
import html from '../../assets/html-1.svg'
import css from '../../assets/css-3.svg'
import git from '../../assets/git-icon.svg'
import arduino from '../../assets/Arduino_Logo.svg'

export default function Header() {


    return (
        <section className="flex-center" id="about">
            <section className="flex-row-center" id="about-me">
                <div>
                    <h2>About Me</h2>
                    <p>Hello! My name is Marco, and I am a Mechanical Engineer turned Developer. I was introduced to Arduino and MATLAB during my time at Cal State University Northridge, which led me to discover an interest for programming. I realized that my true calling was in the field of development, so I made the decision to join a coding bootcamp to further my skills.</p>
                    <p>Outside of programming, I love the outdoors. From camping, to playing sports, to just taking a drive with my beautiful dog.</p>
                </div>
                <div>
                    <Lottie id="my-lottie" animationData={animationPerson} loop={true} />
                </div>
            </section>
            <section className="flex-center" id="tools">
                <div>
                    <h2>Tech</h2>
                </div>
                <ul className="tech flex-row-center">
                    <li><img src={javascript} alt="" /></li>
                    <li><img src={node} alt="" /></li>
                    <li><img src={express} alt="" /></li>
                    <li><img src={mongo} alt="" /></li>
                    <li><img src={python} alt="" /></li>
                    <li><img src={django} alt="" /></li>
                    <li><img src={post} alt="" /></li>
                    <li><img src={react} alt="" /></li>
                    <li><img src={html} alt="" /></li>
                    <li><img src={css} alt="" /></li>
                    <li><img src={git} alt="" /></li>
                    <li><img src={arduino} alt="" /></li>
                </ul>
            </section>
        </section>
    )
}