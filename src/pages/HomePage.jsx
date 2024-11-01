import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
    return (
        <article className="home-page">
            <section className="hero">
                <div className="container">
                    <h2>professional property loss management</h2>
                    <span>a family business that treats you like family</span>
                    <Link to="/" className="link contact-link">
                        <span>CONTACT US</span>
                        <FontAwesomeIcon icon={faChevronRight} className="icon" />
                    </Link>
                    <div className="background">
                        <img src="./src/assets/bg-img.webp" alt="" className="background" />
                    </div>
                </div>
            </section>
            <section className="video-container">
                <h3>Get a behind-the-scenes look at our workplace. We’d love to share it with you!</h3>
                <iframe
                    src="https://player.vimeo.com/video/400254018"></iframe>
            </section>
            <section>
                <div className="message">
                    <h3>We Make Roofing in The Midwest Easy!</h3>
                    <p>We're a Family Business</p>
                    <p>Choosing the right roof for you home can be stressful. You feel pressure to make all sorts of decisions. Possibly the most important choice you make is who you trust to become your contractor.
                    </p>
                    <p>Based in Oregon, WI, Briggs Family Home Development, LLC has over 10 years experience in the home remodeling industry. We're experienced roofing and remodeling contractors who are passionate about making your dreams come true.</p>
                    <p>Our clients come back time and time again because we take the hassle out of renovations. The Kenosha, Oregon, Muskego, Ozaukee County and all of Wisconsin and the Midwest community appreciates our:</p>
                    <ul className="list">
                        <li className="list-item">Customer service
                        </li>
                        <li className="list-item">
                            Cleanliness
                        </li>
                        <li className="list-item">Value for the money</li>
                        <li className="list-item">Organization</li>
                        <li className="list-item">Timeliness</li>
                    </ul>
                    <p>Call <a href="tel:+18663010155" className="link">866-301-0155</a> now for a free estimate on your roofing or remodeling project in Oregon, Kenosha, or the surrounding Midwest areas.</p>
                </div>
            </section>
        </article>
    )
}

export default HomePage;