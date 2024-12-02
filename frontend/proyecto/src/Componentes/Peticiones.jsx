import React, { useState } from 'react';
import axios from 'axios';
import './Peticiones.css';


const Peticiones = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1, // Puedes cambiar esto según tus necesidades
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Respuesta de la API:', response.data);
      // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      // Manejo de errores
    }
  };

  return (
    <div>
      <h2>Formulario de Peticiones</h2>
      <form onSubmit={handleSubmit}>
        <div className= "form_peticiones">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> Mensaje:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" class= "btn send" >Enviar Petición</button>
      </form>
    </div>
  );
};

export default Peticiones;