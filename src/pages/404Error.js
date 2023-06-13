import '../styles/404Error.scss'
import Header from "../components/Header";
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='not_found'>
			<Header />
			<div className="not_found__infos">
				<h1 className='not_found__title'>404</h1>
				<p className='not_found__content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='not_found__return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}

export default NotFound;
