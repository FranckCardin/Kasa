import { Link } from "react-router-dom";
 
function Nav(){
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="Apropos">A propos</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;