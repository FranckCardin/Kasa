//import Composant 
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Notfound from './pages/404Error';
//import SCSS
import "./styles/root.scss"

function App(){
    return  (
        //Routes des différentes pages du site
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/Apropos" element = { <About /> } />
            <Route path="/Logements" element = { <Accommodation /> } />
            <Route path="*" element = { <Notfound /> } />
        </Routes>
    );
}
    
export default App;
