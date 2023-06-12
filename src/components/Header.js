import Logo from '../assets/LogoHeader.png';
import Nav from './Nav';
import '../styles/header.css';

function Header() {
	return (
		<header className='header'>
			<div>
                <img src={Logo} alt="kasa" />
            </div>
        <Nav />
		</header>
	)
}

export default Header;


