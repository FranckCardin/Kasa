//import SCSS
import "../styles/composants/infos.scss";

function Infos({title, location}) {
    return (
        <>
        <h1 className="accommodation__contentInfos--title">{title}</h1>
        <p className="accommodation__contentInfos--location">{location}</p>
        </>
      )
}

export default Infos;