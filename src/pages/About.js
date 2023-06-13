//import Composant 
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
//import IMG 
import BackgroundAbout from '../assets/BackgroundAbout.png';
//import SCSS 
import "../styles/about.scss";

function About(){
    return (
        /* Affichage Banner avec l'img correspondante */
        <main>
            <div className="about">
                <Header />
                <Banner BackgroundPicture= {BackgroundAbout} alt="BannerAbout"/>
                <main>
                    <div className="about__content">
        
                    </div>
                </main>
                <Footer />
            </div>
        </main>
    )
}

export default About;
