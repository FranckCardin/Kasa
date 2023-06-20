//import CSS
import "../styles/composants/host.scss";

function Host({name, picture}) {
  return (
    <>
    <h3 className="accommodation__host--title"><span>{name.split(' ')[0]}</span> <span>{name.split(' ')[1]}</span></h3>
    <img className="accommodation__host--picture" src={picture} alt={`avatar de ${name}`} />
    </>
  )
}

export default Host;
