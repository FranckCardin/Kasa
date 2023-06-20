//import Composant 
import { NavLink } from "react-router-dom";
//import SCSS 
import '../styles/composants/nav.scss';

function Nav(){
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li><NavLink to="/" className={(nav) => nav.isActive ? "active" : "" }>Accueil</NavLink></li>
                <li><NavLink to="/Apropos" className={(nav) => nav.isActive ? "active" : "" }>A propos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
