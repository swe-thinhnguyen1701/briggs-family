import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="link">
                        <img src="./src/assets/birgg-logo.webp" alt="Briggs family logo" className="logo"/>
                    </Link>
                </div>
                <div className="navright">
                    <div className="menu-toggle">
                        <span className="bar"></span>
                    </div>
                    <ul className="list menu">
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