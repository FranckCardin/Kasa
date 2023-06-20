//import IMG 
import LogoFooter from "../assets/LogoFooter.png";
//import SCSS 
import "../styles/composants/footer.scss"

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={LogoFooter} alt= "Kasa" />
            <div className="footer__copyright">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;
