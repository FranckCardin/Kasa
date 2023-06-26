//import HOOK REACT 
import { Link } from 'react-router-dom';
//import Composant 
import Header from "../components/Header";
import Footer from "../components/Footer";
//import SCSS 
import '../styles/pages/404Error.scss'

function NotFound() {
	return (
		<div className='not_found'>
			<Header />
			<div className="not_found__infos">
				<h1 className='not_found__title'>404</h1>
				<p className='not_found__content'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className='not_found__return' to='/'>Retourner sur la page d'accueil</Link>
				<Footer className="not_found__footer" />
		</div>
	)
}

export default NotFound;
