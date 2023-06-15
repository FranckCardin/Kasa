//Import Composant
import { useState } from "react";
//Import IMG
import Arrow from '../assets/Arrow.png';
//Import CSS
import '../styles/collapse.scss';

function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <h3 className="collapse__title" onClick={() => setIsOpen(!isOpen)}> {title} 
                <img className={isOpen ? 'arrow arrow_up' : 'arrow arrow_down'} 
                     src={Arrow} 
                     alt="Collapse Content"/> 
            </h3>

            <div className={isOpen? "collapse__content--open" : "collapse__content--close"}>
                {isOpen && (<p>{content}</p>)}
            </div>
        </div>
    )
}

export default Collapse;