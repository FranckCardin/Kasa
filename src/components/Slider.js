//Import Composant
import { useState } from "react";
//Import IMG
import ArrowRight from "../assets/ArrowRight.png";
import ArrowLeft from "../assets/ArrowLeft.png";

function Slider() {
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

}