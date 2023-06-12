import BackgroundBanner from '../assets/BackgroundBanner.png';
import '../styles/banner.css';

function Banner()  {
    return (
        <div className="banner">
            <img className="banner__background" src={BackgroundBanner} alt="BackgroundBanner" />
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;
