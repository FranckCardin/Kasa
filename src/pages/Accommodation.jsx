//import Composant 
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
//import DATA 
import Data from "../data/data";
//import SCSS
import "../styles/accommodation.scss";

function Accommodation(){
    
    const data = Data;
    //Récupération de l'id de l'accommodation par rapport à l'url
    const idAccomodation = useParams('id').id;
    //Récupération des données de l'accommodation par rapport à id de l'url 
    const dataCurrentAccomodation = data.filter(data => data.id === idAccomodation);
    
    return (
        <>
        <Header />
            <main className="main__accommodation">
                <section className="Slider">
                    <Slideshow/>
                </section>
                
                <section className="accommodation">
                    <div className="accommodation__content">
                        <div className="accommodation__contentInfos">
                            <h1 className="accommodation__contentInfos--title">{dataCurrentAccomodation[0].title}</h1>
                            <p className="accommodation__contentInfos--location">{dataCurrentAccomodation[0].location}</p>
                        </div>
                        <div className="accommodation__host">
                            <p className="accommodation__host--name">{dataCurrentAccomodation[0].host.name}</p>
                            <img className="accommodation__host--picture"src={dataCurrentAccomodation[0].host.picture} alt="Hébergeur du logement"></img>
                        </div>
                    </div>

                    <div className="accommodation__contentTagsRatings">
                        <div className="accommodation__contentTagsRatings--tags">
                            {dataCurrentAccomodation[0].tags.map((tag) => {
                                        return (
                                            <button className="accommodation__contentTagsRatings--tags--btn">{tag}</button>
                                        )
                                    })}
                        </div>
                        <div className="accommodation__contentTagsRatings--ratings">
                            < Rating rating={dataCurrentAccomodation[0].rating}/>
                        </div>
                    </div>
                </section>
            

                <div className="collapse__accommodation">
                    <div className="collapse__accommodation--content"> 
                        <Collapse title="Description" content={dataCurrentAccomodation[0].description}/>
                    </div>
                    <div className="collapse__accommodation--content">
                        <Collapse title="Équipements" content={dataCurrentAccomodation[0].equipments}/>
                    </div>
                </div>
            </main>
        <Footer />
        </>
    )
}

export default Accommodation;