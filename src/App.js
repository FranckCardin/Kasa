import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Logements from './pages/Logements';
import Notfound from './pages/404Error';

function App(){
    return  (
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/Apropos" element = { <About /> } />
            <Route path="/Logements" element = { <Logements /> } />
            <Route path="*" element = { <Notfound /> } />
        </Routes>
    );
}
    
export default App;
