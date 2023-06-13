//import SCSS 
import '../styles/banner.scss';

//Fonction avec deux paramètres pour l'image de la bannière et le titre en fonction de la page
function Banner ({BackgroundPicture, title, alt})  {
    return (
        <div className="banner">
            <img className="banner__background" src={BackgroundPicture} alt={alt} />
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}

export default Banner;
