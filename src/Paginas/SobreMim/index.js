import PostModelo from "Components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png.jpeg";

export default function SobreMim () {
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gustavo!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="foto do Gustavo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou estudante de Engenharia de Software e apaixonado por tecnologia. 
                Estou sempre em busca de novos desafios e aprendizados, principalmente na área de desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, estou focado em aprimorar minhas habilidades em React e Node.js, 
                além de explorar novas tecnologias e frameworks.
            </p>
            <p className={styles.paragrafo}>
                Este blog foi criado como parte do meu aprendizado e para compartilhar conhecimentos e experiências com outros desenvolvedores.
            </p>
            <p className={styles.paragrafo}>
                Espero que você encontre aqui conteúdos úteis e inspiradores para sua jornada na programação! 
            </p>


        </PostModelo>
    )
}