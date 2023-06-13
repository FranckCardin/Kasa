import Logo from '../assets/LogoHeader.png';
import Nav from './Nav';
import '../styles/header.scss';

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


