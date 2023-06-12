import LogoFooter from "../assets/LogoFooter.png";
import "../styles/footer.css"

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={LogoFooter} alt= "Kasa" />
            <div className="footer__copyright">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;
