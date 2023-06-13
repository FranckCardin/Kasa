//import Composant 
import Header from '../components/Header';
import Footer from '../components/Footer';
//import SCSS
import "../styles/accommodation.scss";


function Accommodation(){
    return (
        <main>
            <div className="accommodation">
                <Header />
                <main>
                    <div className="accommodation__content">

                    </div>
                </main>
                <Footer />
            </div>
        </main>
    )
}

export default Accommodation;
