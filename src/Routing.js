import React from "react";

import './index.css';
import Bangluru from './components/pages/Banglure';
import Nav from './components/Nav';
import Bg from './components/Background';
import Cartsdiv from './components/cartsdiv';
import Fotter from './components/Fotter';
import  App1 from './components/App1';
import Eror from './components/error';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Goa from './components/pages/Goa';
import Baninner from './components/pages/Baninner';
import Goainner1 from './components/pages/Goainner1';
import Kolkatha from './components/pages/Kolkatha';
import Kol1 from "./components/pages/Kolkathainner1";
function Routing(){
    return(
        <>
        <BrowserRouter>
 
 <Routes>
    
    <Route path="/" element={<App1 />} />
    <Route path='/components/Nav' element={<Nav/>}/>
    <Route path='/components/Background' element={<Bg/>}/>
    <Route path='/components/cartsdiv' element={<Cartsdiv/>}/>
    <Route path='/components/Fotter' element={<Fotter/>}/>
    <Route path='/bengaluru' element={<Bangluru/>}/>
    <Route path='/Goa' element={<Goa/>}/>
    <Route path='/bengaluru/2447910730'element={<Baninner/>}/>
    <Route path='/goa/8549673097' element={<Goainner1/>}/>
    <Route path='/kolkata' element={<Kolkatha/>}/>
    <Route path="kolkata/8318638903" element={<Kol1/>}/>
    <Route path='*' element={<Eror/>}/>

 </Routes>
 </BrowserRouter>
        
        </>
    )
}
export default Routing