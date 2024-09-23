import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import playa from '../assets/playa2.jpg'
import logo from '../assets/logo.png'


export function Home() {
    return(

        <div>
        <header>
            <div className="logo">Turiscaribbean</div>
            <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><Link to="/Login">Inicio de sesion</Link></li>
            </ul>
            </nav>
        </header>

        <section className="home" id="home">
            <img src={playa} alt="Hostal Panorámica" />
            <div className="hero">
            <h1>Bienvenidos a Turiscaribbean</h1>
            <p>
                Bienvenido a Turiscaribbean, tu puerta de entrada a las maravillas del Caribe. Fundada con la misión de brindar experiencias únicas y memorables, Turiscaribbean se dedica a ofrecer una gama completa de servicios turísticos que incluyen tours personalizados, alojamiento de calidad y actividades emocionantes para todo tipo de viajeros.
            </p>
            <a href="#about" className="cta">Descubre más</a>
            </div>
        </section><br />

        <section className="about" id="about">
            <h2>Acerca de Nosotros</h2>
            <p>
            En Turiscaribbean, nuestra pasión es ofrecerte experiencias inolvidables en el corazón del Caribe. Fundada con el objetivo de mostrar la belleza y diversidad de esta región tropical, nuestro equipo está dedicado a proporcionarte un servicio excepcional y personalizado.
            </p>
            <div className="cards1">
            <div className="card1">
                <div className="card__preview">
                <img src={logo} alt="Turiscaribbean" />
                </div>
                <div className="card__right">
                <div className="card__content">
                    <h2>Misión</h2>
                    <p className="card__description">
                    Queremos que cada viaje con nosotros sea más que una simple excursión; queremos que sea una inmersión en la cultura, historia y maravillas naturales del Caribe. Desde playas paradisíacas hasta vibrantes festivales locales, estamos aquí para ayudarte a descubrir lo mejor que esta región tiene para ofrecer.
                    </p>
                </div>
                </div>
            </div>
            <div className="card1">
                <div className="card__right">
                <div className="card__content">
                    <h2>Nuestro Equipo</h2>
                    <p className="card__description">
                    Contamos con un equipo apasionado y profesional que está siempre dispuesto a hacer de tu viaje una experiencia inolvidable. Desde planificadores de viajes hasta guías turísticos, cada miembro de nuestro equipo aporta su experiencia y entusiasmo para garantizar que tu aventura en el Caribe sea perfecta.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section><br /><br />

        <section className="services" id="services">
            <h2>Nuestros Servicios</h2>
            <div className="servicios">
            <div className="service">
                <h3>Tours Guiados</h3>
                <p>Explora el Caribe con nuestros expertos guías turísticos.</p>
            </div>
            <div className="service">
                <h3>Alojamiento</h3>
                <p>Encuentra los mejores lugares para hospedarte durante tu viaje.</p>
            </div>
            <div className="service">
                <h3>Actividades</h3>
                <p>Disfruta de una variedad de actividades emocionantes.</p>
            </div>
            </div>
        </section><br/><br/><br/>

        <section className="contact" id="contact">
            <h1>Contáctanos</h1>
            <p>
            Bienvenido a Turiscaribbean, tu puerta de entrada a las maravillas del Caribe. Fundada con la misión de brindar experiencias únicas y memorables.
            </p><br />
            <div className="contenedor">
                <form action="#">
                <h2>Contacto</h2><br />
                <p>Ponte en contacto con nosotros para más información.</p>
                
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button className="but" type="submit">Enviar</button>
                </form>
            </div><br />
        </section>

        <footer>
            <p>&copy; 2024 Turiscaribbean. Todos los derechos reservados.</p>
        </footer>
        </div>
    );
}




