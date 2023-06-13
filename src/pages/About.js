import Header from '../components/Header';
import Banner from '../components/Banner';
import BackgroundAbout from '../assets/BackgroundAbout.png';
import Footer from '../components/Footer';
import "../styles/about.scss";

function About(){
    return (
        <main>
            <div className="about">
                <Header />
                <Banner BackgroundPicture= {BackgroundAbout}/>
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
