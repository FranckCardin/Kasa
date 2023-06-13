import data from "../data/data";
import '../styles/card.scss';

function Card(){
    return (
        //Récupération et création d'un tableau des données des logements du fichier data
          <main>
            <div className="card">
                { data.map ((data, index) => (
                    <div key={index} className="card__content">
                        <img className="card__img" src={ data.cover } alt={ data.title }/>
                        <h3 className="card__title"> { data.title }</h3>
                    </div>
            ))}
            </div>
        </main>
    )
}

export default Card;
