//import HOOK REACT
import { Navigate, useParams } from 'react-router-dom';
//import COMPOSANT 
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Infos from "../components/Infos";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
//import DATA 
import Data from "../data/data";
//import SCSS
import "../styles/pages/accommodation.scss";

function Accommodation(){
    
    const data = Data;
    //Récupération de l'id de l'accommodation par rapport aux paramètres à l'url
    const idAccomodation = useParams('id').id;
    //Récupération des données de l'accommodation par rapport à id de l'url 
    const dataCurrentAccomodation = data.find(data => data.id === idAccomodation);

    //Si l'id de l'accommodation n'est pas le bon, redirection vers la page NotFound
    if (!dataCurrentAccomodation) {
        return (
            <Navigate to="/PageNotFound"/>
        )
    }
    
    const {pictures, title, location, host, tags, rating, description, equipments} = dataCurrentAccomodation
    return (
        <>
        <Header />
            <main className="main__accommodation">
                <section className="slider__accomodation">
                    <Slideshow imageSlider={pictures}/>
                </section>
                
                <section className="accommodation">
                    <div className="accommodation__content">
                        <div className="accommodation__contentInfos">
                            < Infos title={title} location={location}/>
                        </div>

                        <div className="accommodation__contentTags">
                            {tags.map((tags, index) => (
                                < Tags tag={tags} key={index}/>
                            ))}
                        </div>
                    </div>

                    <div className="accommodation__contentHostRatings">
                        <div className="accommodation__contentHostRatings--host">
                            <Host name={host.name} picture={host.picture}/>
                        </div>

                        <div className="accommodation__contentHostRatings--ratings">
                            < Rating rating={rating}/>
                        </div>
                    </div>
                </section>
            

                <div className="collapse__accommodation">
                    <div className="collapse__accommodation--content"> 
                        <Collapse title="Description" content={description}/>
                    </div>
                    <div className="collapse__accommodation--content">
                        <Collapse title="Équipements" content={equipments}/>
                    </div>
                </div>
            </main>
        <Footer />
        </>
    )
}

export default Accommodation;