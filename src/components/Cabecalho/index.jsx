import { Link } from "react-router-dom";
import Logo from './logo.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from "components/CabecalhoLink";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}