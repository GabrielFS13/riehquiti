import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from 'json/db.json'
import styles from './Inicio.module.css'
export default function Inicio() {
    return (
        <>
            <Banner imagem="home"/>
            <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
            <section className={styles.container}>
                {videos.map((video) =>(
                    <Card id={video.id} capa={video.capa} titulo = {video.titulo} key={video.id}/>
                ))}
            </section>
        </>
    )
}