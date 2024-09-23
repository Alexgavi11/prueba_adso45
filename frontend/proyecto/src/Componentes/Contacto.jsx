import React from 'react';
import './Contacto.css'; 
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/gorjeo.png'

export function Contacto() {
  return (
    <footer id="contacto">
      <h3 className="contac">Contacto</h3>
      <p>¡Contáctanos para más información!</p>
      <address>
        Dirección: Vista hermosa, Cartagena<br/>
        Teléfono: 123-456-789<br/>
        Email: Desvolstgalph@turismo.com
      </address>
      <p>Síguenos en nuestras redes sociales:</p>
      <div className="social-buttons">
        <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook"/>
        </a>
        <a href="https://twitter.com/tupagina" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter"/>
        </a>
        <a href="https://www.instagram.com/tupagina" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram"/>
        </a>
      </div>
      <p>&copy; 2024 Turiscarribean. Todos los derechos reservados.</p>
    </footer>
  );
}
