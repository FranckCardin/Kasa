//import Composant 
import Nav from './Nav';
//import IMG 
import Logo from '../assets/LogoHeader.png';
//import SCSS
import '../styles/composants/header.scss';

function Header() {
	return (
		<header className="header">
			<div className="header__content">
                <img className="header__logo" src={Logo} alt="kasa" />
            </div>
        <Nav />
		</header>
	)
}

export default Header;


