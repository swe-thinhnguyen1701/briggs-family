import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const currentPage = useLocation().pathname;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);  // Close the menu if width reaches 768px
                setShowSubMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();  // Run the function on initial load in case the window is already resized

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuClick = (e) => {
        // e.preventDefault();
        console.log(e.target.closest(".menu-item"));
        if(e.target.closest(".dropdown-menu")) 
            return;

        if (e.target.closest(".menu-item")){
            setIsOpen(!isOpen);
            setShowSubMenu(false);
        }
    }

    const handleSubMenuClick = (e) => {
        if (e.target.closest(".sub-menu-item")){
            setIsOpen(!isOpen);
            setShowSubMenu(!showSubMenu);
        }
        else
            setShowSubMenu(!showSubMenu);
    }

    return (
        <nav className="nav">
            <div className="nav-container m-center">
                <div className="nav-left">
                    <Link to="/" className="link logo-container" onClick={() => setIsOpen(false)}>
                        <img src="./src/assets/birgg-logo.webp" alt="Briggs family logo" className="logo" />
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
                        <li className={showSubMenu ? "menu-item dropdown-menu show" : "menu-item dropdown-menu"} onClick={(e) =>handleSubMenuClick(e)}>
                            <div className="dropdown-menu-heading">
                                <span>Services</span>
                                <FontAwesomeIcon icon={faChevronDown} className="icon" />
                            </div>
                            <ul className="list sub-menu">
                                <div>
                                    <li className="sub-menu-item">
                                        <Link to="/service/roof" className={currentPage === "/service/roof" ? "sub-menu-link highlight" : "sub-menu-link"} >Roofing</Link>
                                    </li>
                                    <li className="sub-menu-item">
                                        <Link to="/service/siding" className="sub-menu-link">Siding</Link>
                                    </li>
                                    <li className="sub-menu-item">
                                        <Link to="/service/remodel" className="sub-menu-link">Remodeling</Link>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li className="menu-item">
                            <Link to="/gallery" className={currentPage === "/gallery" ? "link highlight" : "link"}>Gallery</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/testimonials" className={currentPage === "/testimonials" ? "link highlight" : "link"}>Testimonials</Link>
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