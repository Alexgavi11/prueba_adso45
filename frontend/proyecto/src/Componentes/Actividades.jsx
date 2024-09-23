import React from 'react';
import './Actividades.css'; 

export function Actividades() {
  return (
    <section className="section2" id="actividades">
      <h3>Actividades</h3>
      <p>Explora nuestras actividades turísticas:</p><br/><br/>
      <div className="cards">
        <div className="card">
          <h3>Playa Blanca</h3>
          <p>Playa Blanca no se encuentra en Cartagena sino en la isla de Barú, unos 75 minutos en vehículo o 35 minutos en lancha rápida desde el muelle de la Bodeguita en Cartagena. Isla Barú es una de las Islas del Rosario en Colombia.</p>
        </div>
        <div className="card">
          <h3>Playa Blanca</h3>
          <p>Si bien no es sorprendente que, como una de las playas más impresionantes de Cartagena, Colombia, ¡Playa Blanca sea bastante popular entre cualquier turista que busque una escapada a la playa durante su viaje a Colombia!</p>
        </div>
        <div className="card">
          <h3>Playa Blanca</h3>
          <p>Conocer Playa Blanca es una de las mejores decisiones que puedes tomar si te encuentras de visita en Cartagena. Su hermoso paisaje y los servicios que se ofrecen te harán vivir una experiencia de otro mundo.</p>
        </div>
      </div>
    </section>
  );
}
