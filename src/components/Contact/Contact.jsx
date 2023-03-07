import { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7497a0m', 'template_ji08oq7', form.current, 'LpSuZxGcnUytPiwHX')
        e.target.reset()
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="flex-row-center" id="contact">

            <div className="contact-content" data-aos="fade-right">
                <h2>Let's talk about anything.</h2>
                <p>For job opportunities, to collaborate, or to just say hello! I will do my best to get back to you as soon as possible</p>
                <div class="socials">
                    <a href="https://www.linkedin.com/in/marcoruizjr/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/mar69287" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="mailto:marcoa.ruiz97@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div className="form" data-aos="fade-up">
                <h1>Get in touch</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" id="name" name="name" placeholder="Name" required />
                    <input type="text" id="email" name="email" placeholder="Email" required />
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
                    <button>Send</button>
                </form>

            </div>
        </section >
    )
}