import React, { useEffect } from 'react';
import {Input} from 'antd';

import FormComponent from './FormComponent';


const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function MapComponent() {
useEffect(() => {
    const iniciarMap = () => {
    const coord = { lat: 10.3932, lng: -75.4832 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: coord,
    });
    new window.google.maps.Marker({
        position: coord,
        map: map,
    });
    };

    const cargarMapa = () => {
    const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap'; //key: AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg
    script.async = true;
    window.iniciarMap = iniciarMap;
    document.body.appendChild(script);
    };

    cargarMapa();
}, []);

return (
    
        <div style={{display: 'flex', gap:'100px', marginTop: '20px'}}>
            
        
          {/* Contenedor del mapa */}
        <div id="map" style={{ width: '50%', height: '570px', marginLeft: '50px' }}></div>
        
        <div className='formulario'>
            <FormComponent/>
        </div>
        </div>
        
        


    );
    }
    
    export default MapComponent;