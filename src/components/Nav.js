import { Link } from "react-router-dom";
import '../styles/nav.css';

function Nav(){
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="Apropos">A propos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
