import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logements from './pages/Logements';
import Notfound from './pages/404Error';

function App(){
    return  (
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/Apropos" element = { <Apropos /> } />
            <Route path="/Logements" element = { <Logements /> } />
            <Route path="*" element = { <Notfound /> } />
        </Routes>
    );
}
    
export default App;