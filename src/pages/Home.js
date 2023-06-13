import Header from '../components/Header';
import Banner from '../components/Banner';
import BackgroundBanner from '../assets/BackgroundBanner.png';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {
	return (
		<div className='home'>
			<Header />
            <Banner BackgroundPicture={BackgroundBanner} title="Chez vous, partout et ailleurs"/>
            <Card />
            <Footer />
		</div>
	)
}
export default Home;
