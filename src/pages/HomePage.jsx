import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
    return (
        <article>
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
        </article>
    )
}

export default HomePage;