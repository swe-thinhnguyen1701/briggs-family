import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>
            <ul className="list">
                <li className="list-item">
                    <h4 className="footer-title">Address</h4>
                    <div className="footer-info">
                        <span>2717 N Grandview</span>
                        <span>Suite 201</span>
                        <span>Waukesha, WI 53188</span>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="footer-title">Business Hour</h4>
                    <div className="footer-info">
                        <span>
                            <span className="day">Mon - Fri:</span>
                            <span className="time">9:00 AM - 5:00 PM</span>
                        </span>
                        <span>
                            <span className="day">Sat - Sun:</span>
                            <span className="time">Closed</span>
                        </span>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="footer-title">Follow Us</h4>
                    <div className="footer-info">
                        <Link to="/" className="link">
                            <FontAwesomeIcon icon={faSquareFacebook} className="icon" />
                        </Link>
                        <Link to="/" className="link">
                            <FontAwesomeIcon icon={faGooglePlusG} className="icon" />
                        </Link>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="footer-title">Quick Links</h4>
                    <div className="footer-info">
                        <Link to="/career" className="link contact-link">Career</Link>
                        <Link to="/private-policy" className="link contact-link">Private Policy</Link>
                        <Link to="/faq" className="link contact-link">FAQ</Link>
                    </div>
                </li>
                <li className="list-item">
                    <h4 className="footer-title">Contact</h4>
                    <div className="footer-info">
                        <a href="tel:+18663010155" className="link contact-link">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <span>(866) 301 - 0155</span>
                        </a>
                        <a href="tel:+12628540155" className="link contact-link">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <span>(262) 854 - 0155</span>
                        </a>
                        <a href="mailto:CustomerCare@briggsfamilyhd.com" className="link contact-link">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <span>CustomerCare@briggsfamilyhd.com</span>
                        </a>
                    </div>
                </li>
            </ul>
            <div className="copyright">
                <span>Copyright © 2024 Briggs Family. All rights reversed.</span>
            </div>
        </footer>
    )
}

export default Footer;