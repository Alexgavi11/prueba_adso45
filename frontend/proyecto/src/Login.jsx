import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Link } from "react-router-dom";
import Google from './assets/Google.png';
import Apple from './assets/Apple.png';
import Sesion from './assets/Sesion.png';
import Swal from "sweetalert2";




export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
        .then(res => {
            console.log(res);
            
            if (res.status == 200) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Ingresando a nuestro sistema",
                    showConfirmButton: false,
                    timer: 2500
                    
                });
                navigate('/Inicio');
            }
        })
        .catch(err => {
            console.log(err);
            if(err.response.status == 401){
                Swal.fire({
                    title: "error",
                    text: err.response.data.message,
                    icon: "error"
                });
            }   
        })

    }

return (

    <div className="container">
        <form onSubmit={handleSubmit}>
            <img src={Sesion} alt="" />
            <h2>Iniciar sesion</h2>
            <input type="email"
                        placeholder="Ingresa tu correo"
                        className="input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>

            <input type="password"
                        placeholder="Ingresa tu contraseña"
                        className="input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>

            <button className="button-submit" type="submit">Iniciar sesion</button>
            <div className="line"></div>

            <div className="flex-row">
                <button className="btn google"><img src={Google} alt="" />Google</button>
                <button className="btn apple"><img src={Apple} alt="" />Apple</button>
            </div>

            <p>¿No tienes una cuenta? <Link to="/Register">Registro</Link></p>

        </form>
    </div>
    
    );
}


