import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentPage = useLocation().pathname;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);  // Close the menu if width reaches 768px
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();  // Run the function on initial load in case the window is already resized

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuClick = (e) => {
        // e.preventDefault();
        console.log(e.target.closest(".menu-item"));
        if(e.target.closest(".menu-item"))
            setIsOpen(!isOpen);
    }

    return (
        <nav className="nav">
            <div className="nav-container m-center">
                <div className="nav-left">
                    <Link to="/" className="link logo-container" onClick={() => setIsOpen(false)}>
                        <img src="./src/assets/birgg-logo.webp" alt="Briggs family logo" className="logo"/>
                    </Link>
                </div>
                <div className="nav-right">
                    <div className={isOpen ? "menu-toggle open" : "menu-toggle"} onClick={() => setIsOpen(!isOpen)}>
                        <span className="bar"></span>
                    </div>
                    <ul className={isOpen ? "list menu open" : "list menu"} onClick={(e) => handleMenuClick(e)}>
                        <li className="menu-item">
                            <Link to="/" className={currentPage === "/" ? "link highlight" : "link"}>Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/gallery" className={currentPage === "/gallery" ? "link highlight" : "link"}>Gallery</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/testimonials"  className={currentPage === "/testimonials" ? "link highlight" : "link"}>Testimonials</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contact" className={currentPage === "/contact" ? "link highlight" : "link"}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;