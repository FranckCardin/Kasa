//Import Composant
import { useState } from 'react'
//Import IMG
import ArrowRight from "../assets/ArrowRight.png";
import ArrowLeft from "../assets/ArrowLeft.png";
//import CSS
import "../styles/composants/slideshow.scss";

function Slideshow({imageSlider}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    return (
        <div style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='slider'>
            {imageSlider.length > 1 && 
                <>
                <img 
                    className="slider__arrow slider__arrow--arrowLeft" 
                    src={ArrowLeft} 
                    alt="Contenu précédent"  
                    onClick={prevSlide}
                />
                    <img 
                        className="slider__arrow slider__arrow--arrowRight"  
                        src={ArrowRight} 
                        alt="contenu suivant"  
                        onClick={nextSlide}
                    />
                    <p className="slider__sliderCount">{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </div>
    )
}

export default Slideshow;