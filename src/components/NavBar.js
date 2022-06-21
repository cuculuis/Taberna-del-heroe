import logo from "../assets/logo.png";
import styles from "./Navbar.css";

export default function Navbar(){
    return(
        <nav className={styles.navMain}>
            <img src="{logo}" alt="Logo" />
            <ul className={styles.navList}>
                <NavLink title="Productos" />
                <NavLink title="Servicios" />
                <NavLink title="Contacto" />
                <NavLinkChild>
                    <p>Login</p>
                </NavLinkChild>
            </ul>
        </nav>
    );
}
