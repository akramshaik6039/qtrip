
import Nav from './Nav';
import Cartsdiv from './cartsdiv';
import Bg from './Background'
import Fotter from './Fotter'

import Bangluru from './pages/Banglure';
import Eror from './error';
import React from 'react';
import  { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';


class App1 extends  React.Component {

    render(){
return(
    <>    
    <Nav/>
    <Bg/>
    
    <Fotter/>
    </>
)
    }
}
export  default App1;
