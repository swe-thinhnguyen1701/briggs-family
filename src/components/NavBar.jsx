import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isClose, setIsClose] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="link logo-container">
                        <img src="./src/assets/birgg-logo.webp" alt="Briggs family logo" className="logo"/>
                    </Link>
                </div>
                <div className="navright">
                    <div className={isClose ? "menu-toggle close" : "menu-toggle"} onClick={() => setIsClose(!isClose)}>
                        <span className="bar"></span>
                    </div>
                    <ul className="list menu">
                        <li className="menu-item">
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="link">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;