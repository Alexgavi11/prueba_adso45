import React from 'react';
import './Inicio.css'; 
import { Destinos } from './Destinos';
import { Actividades } from './Actividades';
import { Contacto } from './Contacto';
import playa from '../assets/playa1.jpg'

export function Inicio() {
  return (
    <div className="container">
      <div className='Inicio'>
        <img src={playa} alt="logo"/>
        <div className="hero">
          <h1>Bienvenidos a Turiscaribbean</h1>
          <p>Bienvenido a Turiscarribean, tu puerta de entrada a las maravillas del Caribe. Fundada con la misión de brindar experiencias únicas y memorables, Turiscarribean se dedica a ofrecer una gama completa de servicios turísticos que incluyen tours personalizados, alojamiento de calidad y actividades emocionantes para todo tipo de viajeros.</p>
          <a href="#destinos" className="cta">Descubre más</a>
          
        </div>
      </div><br /><br /><br />

      <div className='destinos'>
        <Destinos/>
      </div><br /><br /><br />

      <div className='Actividades'>
        <Actividades/>
      </div><br /><br /><br />

      <div className='footer'>
        <Contacto/>
      </div>
      
    </div>
  );
}
