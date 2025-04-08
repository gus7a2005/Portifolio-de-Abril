import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png.jpeg";

export default function Banner (){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, devs!
                </h1>

                <p className={styles.paragrafo}>
                    Bem-vindos ao meu espaço pessoal! Sou o Gustavo Coelho, estudante de Engenharia de Software apaixonado por tecnologia! Aqui você encontrará uma seleção de projetos que desenvolvi ao longo dos meus estudos. Sinta-se à vontade para explorar e conhecer mais sobre o que venho desenvolvendo.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} 
                src={circuloColorido}
                aria-hidden={true}/>

                <img className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto do Gustavo Coelho"/>
            </div>
        </div>
    )
}