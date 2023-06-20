//import Composant 
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
//import Img
import BackgroundHome from '../assets/BackgroundHome.png';


function Home() {
	return (
		/* Affichage Banner avec l'img correspondante */
		<div className='home'>
			<Header />
            <Banner BackgroundPicture={BackgroundHome} alt="BannerHome" title="Chez vous, partout et ailleurs"/>
            <Card />
            <Footer />
		</div>
	)
}
export default Home;
