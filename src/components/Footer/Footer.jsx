export default function Header() {


    return (
        <footer>
            <div
                style={{ left: '0' }}
                className="footer-icons">
                <ul className="flex-center">
                    <li><a href="mailto:marcoa.ruiz97@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/marcoruizjr/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/mar69287" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                </ul>
                <div className="vertical-line"></div>
            </div>
            <div style={{ right: '0' }} className="footer-icons">
                <p> Scroll down</p>
                <i class="fa-solid fa-arrow-right"></i>
                {/* <div class="vertical-line"></div> */}

            </div>
        </footer>
    )
}