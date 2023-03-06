import logo from '../../assets/logo.png'
import { useEffect } from 'react'
import resume from '../../assets/resume.pdf'

export default function NavBar() {

    useEffect(() => {
        let hamburgerIcon = document.querySelector('.hamburger-icon');
        let navUl = document.querySelector('.nav-ul');

        hamburgerIcon.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });

        let navLinks = document.querySelectorAll('.nav-ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
            });
        });
    }, []);

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className='nav-ul'>
                <li><a href="#" >Home</a></li>
                <li><a href="#projects" >Projects</a></li>
                <li><a href="#about" >About Me</a></li>
                <li><a href={resume} target='_blank'>Resume</a></li>
                <li><a href="#contact" >Contact</a></li>
            </ul>
            <a class="hamburger-icon">
                <i class="fa fa-bars"></i>
            </a>
        </nav>
    )
}