//import Composant 
import Header from '../components/Header';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
//import DATA 
//import Data from "../data/data";
//import SCSS
import "../styles/accommodation.scss";

/*const data = Data;
const dataName = Data[0].title;

console.log(data);
console.log(dataName);
*/

function Accommodation(){
    return (
        <main>
            <div className="accommodation">
                <Header />
                <main>
                    <div className="Slider">

                    </div>
                    <div className="accommodation__content">

                    </div>
                    <div className="Collapse__accommodation">
                        <Collapse title="Description" content=""/>
                        <Collapse title="Équipement" content=""/>
                    </div>
                </main>
                <Footer />
            </div>
        </main>
    )
}

export default Accommodation;
