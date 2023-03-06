export default function Header() {


    return (
        <section className="flex-row-center" id="contact">

            <div className="contact-content">
                <h2>Let's talk about anything.</h2>
                <p>For job opportunities, to collaborate, or to just say hello! I will do my best to get back to you as soon as possible</p>
                <div class="socials">
                    <a href="https://www.linkedin.com/in/marcoruizjr/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>

                    <a href="https://github.com/mar69287" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="form">
                <h1>Get in touch</h1>
                <form action="#">
                    <input type="text" id="name" name="name" placeholder="Name" required />
                    <input type="text" id="email" name="email" placeholder="Email" required />
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}