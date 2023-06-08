import Logo from '../assets/logo.png';
import Nav from './Nav';
import '../styles/header.scss';

function Header() {
	return (
		<header className='header'>
			<div> <img src={Logo} alt="kasa" /> </div>
        <Nav />
		</header>
	)
}

export default Header;


