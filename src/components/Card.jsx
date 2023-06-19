//import DATA 
import data from "../data/data";
import { Link } from "react-router-dom";
//import SCSS
import '../styles/card.scss';

function Card(){
    return (
        //Récupération et création d'un tableau (.map) des données des logements du fichier data
          <main>
            <div className="card">
                { data.map ((data, index) => (
                    <Link to={`/Logements/${data.id}`}>
                        <div key={index} className="card__content">
                            <img className="card__img" src={ data.cover } alt={ data.title }/>
                            <div className="card__title">
                                <h3 className="card__title--text">{data.title}</h3>
                            </div>
                        </div>
                        </Link>
            ))}
            </div>
        </main>
    )
}

export default Card;
