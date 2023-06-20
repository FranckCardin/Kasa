//import Img 
import StarFull from '../assets/StarFull.png';
import StarEmpty from '../assets/StarEmpty.png';

function Rating(rate){
    const stars = [1, 2, 3, 4, 5];

    return stars.map((star, index) =>
        rate.rating >= star ? (<img className="ratings__starFull" src={StarFull} alt="" key={index} />) : (<img className="ratings__starEmpty" src={StarEmpty} alt="" key={index} />)
    )
}

export default Rating;