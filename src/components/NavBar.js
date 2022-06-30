import loguito from '../assets/loguito.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./NavBar.css";
import Carrito from './Carrito';




export default function NavBar(){
    return(
        <nav className="navMain">
            <img src={ loguito } alt="logo" className='img-Nav'/>
            <ul className="navList">
                <a className="buttom-primary"><li className="title">Productos</li></a>
                <a className="buttom-primary"><li className="title">Servicios</li></a>
                <a className="buttom-primary"><li className="title">Contacto</li></a> 
            </ul>

        <Carrito />
        </nav>
    );
}
