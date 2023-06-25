//import HOOK REACT
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
//import COMPOSANT 
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Notfound from './pages/404Error';
//import SCSS
import "./styles/root.scss"

function App(){
    return  (
        //Routes des différentes pages du site
        //Si page non existante, redirection vers la page NotFound
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/Apropos" element = { <About /> } />
            <Route path="/Logements/:id" element = { <Accommodation /> } />
            <Route path="/PageNotFound" element = { <Notfound /> } />
            <Route path="*" element={<Navigate to="/PageNotFound" />} />
        </Routes>
    );
}
    
export default App;
