import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer () {
    return (
        <>
            <footer>
                <div>
                    <img className="footer-logo" src="https://res.cloudinary.com/dwicisnc3/image/upload/v1750267121/logofooter_vdns7r.png" alt="Logo de la empresa en el footer" />
                </div>
                <div>
                    <ul>
                        <li>Enlaces</li>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <p>Redes Sociales</p>
                    <FontAwesomeIcon icon={faSquareFacebook}/>
                    <FontAwesomeIcon icon={faSquareInstagram}/>
                    <FontAwesomeIcon icon={faSquareTwitter}/>
                </div>
            </footer>
        </>
    )
}

export default Footer;