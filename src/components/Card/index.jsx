import styles from './Card.module.css'
import unFav from './fav.png'
import iconeFavoritar from './desfav.png'
import { useFavoriteContext } from 'components/contextos/Favoritos'
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {

    const { favorito, addFav } = useFavoriteContext()
    const ehFav = favorito.some(fav => fav.id === id)
    const icone = ehFav ? unFav : iconeFavoritar
    return (
        <div className={styles.container}>
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt="Favoritar Filme" className={styles.favoritar} onClick={() => addFav({ id, titulo, capa })} />
        </div>
    )
}