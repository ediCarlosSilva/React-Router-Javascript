import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhafoto from 'assets/perfil.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá! Neste espaço compartilho meus projetos front-end: voluntarios, testes técnicos, estudos e challenges. Eu sou Edi Carlos da Silva. Analista e Desenvolvedor de Sistemas, gerente de TI e desenvolvedor front-end.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Circulo Colorido ao entorno da imagem"
                />

                <img
                    className={styles.minhaFoto}
                    src={minhafoto}
                    alt='Foto do Edi Carlos'
                />
            </div>
        </div>
    )
}