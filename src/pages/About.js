import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import "../styles/about.css";

function About(){
    return (
        <main>
            <div className="about">
                <Header />
                <Banner />
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
