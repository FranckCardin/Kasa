//import Composant 
import { NavLink } from "react-router-dom";
//import SCSS 
import '../styles/nav.scss';

function Nav(){
    return (
        // Operateur Ternaire pour afficher l'element active
        <nav className="navbar">
            <ul className="navbar__list">
                <li><NavLink to="/" className={(nav) => nav.isActive ? "active" : "" }>Accueil</NavLink></li>
                <li><NavLink to="/Apropos" className={(nav) => nav.isActive ? "active" : "" }>A propos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
