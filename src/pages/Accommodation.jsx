//import Composant 
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Slider from '../components/Slider';
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
                <div className="Slider">
                    <Slider/>
                </div>
                <div className="accommodation">
                    <div className="accommodation__content">
                    <h1 className="accommodation__content--title">{dataCurrentAccomodation[0].title}</h1>
                    <p className="accommodation__content--location">{dataCurrentAccomodation[0].location}</p>
                    <div className="accommodation__tags">
                        {dataCurrentAccomodation[0].tags.map((tag) => {
                                    return (
                                        <button className="accommodation__tags--btn">{tag}</button>
                                    )
                                })}
                    </div>
                    </div>
                    <div className="accommodation__host">
                        <p className="accommodation__host--name">{dataCurrentAccomodation[0].host.name}</p>
                        <img className="accommodation__host--picture"src={dataCurrentAccomodation[0].host.picture} alt="Hébergeur du logement"></img>
                    </div>
                </div>
            

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