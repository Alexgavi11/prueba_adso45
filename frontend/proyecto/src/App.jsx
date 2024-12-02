import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Componentes/Navbar';
import { Home } from './Componentes/Home';
import { Login } from "./Login";
import  Registro  from "./Componentes/Register";
import { Inicio } from './Componentes/Inicio';
import Peticiones from './Componentes/Peticiones';
import MapComponent from './Componentes/Sitios';
import './App.css'




// Componente Layout con Navbar
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Navbar */}
        <Route path="/Inicio" element={<Layout><Inicio /></Layout>} />
        <Route path="/Peticiones" element={<Layout><Peticiones /></Layout>} />
        <Route path="/Sitios" element={<Layout><MapComponent /></Layout>} />
        {/* Rutas sin Navbar */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registro />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
