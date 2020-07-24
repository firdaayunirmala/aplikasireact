import React, {useReducer, createContext } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
//import Home from './Component/Fungsional/Home';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
//import KelasComp from './Component/Hooks/Class/KelasComp';
//import HooksComp from './Component/Hooks/Functional/HooksComp';
//import HooksUseEffect from './Component/Hooks/Functional/HooksUseEffects';
//import { CartContext } from './CartContext';
//import ProductComp from './Component/Fungsional/ProductComp';
import './App.css';
import kecantikan from './kecantikan.svg';
//import DetailComp from './Component/Fungsional/DetailComp';
import Tentang from './Component/Fungsional/Tentang';
//import loginuser from './Component/Hooks/loginuser';
import daftar from './Component/Hooks/daftar';
import LoginComp from './Component/Hooks/LoginComp';
//import Header from './Component/Header';
//import Sidebar from './Component/Sidebar';
//import Content from './Component/Content';
//import BootstrapComp from './Component/Class/BootstrapComp';
//import Kursus from './Component/Class/state';
//import Parent from './Component/Class/Parent';
//import Beranda from './Component/Class/Beranda';
//import Hitung from './Component/Class/state';
export const AuthContext = createContext()

//inisiasi state
const initalState = {
isAuthenticated: false,
user: null,
token: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        }

case "LOGOUT":
  localStorage.clear()
  return {
    ...state,
    isAuthenticated: false,
    user : null
  }

  default:
    return state
} 
}
 

function App () {

  const[state, dispatch] = useReducer(reducer, initalState)
  
  return (
    <BrowserRouter>
      <img src={kecantikan} height="200" width="1100" alt="kecantikan" style={{ background: '#96c6db' }} />
      <NavbarComp />
      <Switch>
        <AuthContext.Provider value= {{
          state,
          dispatch
        }}>
       
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/masukadmin"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/datapaket"

              }}
            />
          }


        <Route exact path="/" component={HomePage} />
        <Route exact path="/paket" component={AboutComp} />
        <Route exact path="/tentang" component={Tentang} />
        <Route exact path="/masukadmin" component={LoginComp} />
        {/* <Route exact path="/masukuser" component={loginuser} /> */}
        <Route exact path="/daftar" component={daftar} />
        <Route exact path="/paket/tambah" component={TambahComp} />
        <Route exact path="/datapaket/edit" component={EditComp} />
        <Route exact path="/datapaket" component={ListComp} />
        {/*<Route exact path="/home" component={Home} />*/}
        {/*<Route exact path="/hooks" component={HooksComp} />*/}
        {/* <Route exact path="/useeffects" component={HooksUseEffect} /> */}
        {/*  <Route exact path="/produk" component={ProductComp} />   */}
        {/*<Route exact path="/detail/:id" component={DetailComp} /> */}
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
