import loguito from "../assets/loguito.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./NavBar.css";




export default function NavBar(){
    return(
        <nav className={styles.navMain}>
            <img src="{ loguito }" alt="logo" />
            <ul className={styles.navList}>
                <a className="buttom-primary" title="Productos" />
                <a className="buttom-primary" title="Servicios" />
                <a className="buttom-primary" title="Contacto" />
            </ul>
        </nav>
    );
}
