import loguito from "../assets/loguito.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./NavBar.css";




export default function NavBar(){
    return(
        <nav className="navMain">
            <img src="../assets/loguito.jpg" alt="logo" />
            <ul className="navList">
                <a className="buttom-primary"><li className="title">Productos</li></a>
                <a className="buttom-primary"><li className="title">Servicios</li></a>
                <a className="buttom-primary"><li className="title">Contacto</li></a> 
            </ul>
        </nav>
    );
}
