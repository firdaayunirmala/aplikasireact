import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';


//import BootstrapComp from './Component/Class/BootstrapComp';
//import Kursus from './Component/Class/state';
//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';
//import Hitung from './Component/Class/state';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutComp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
