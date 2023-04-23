import styles from './Sobremim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/perfil.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Edi Carlos!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Edi Carlos sorrindo."
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou gerente de TI, professor do Estado de São Paulo, apaixonado por front-end (looking up my opportunity) e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com a informática começou no colégio objetivo aqui de Sorocaba - SP, quando fiz um curso técnico em informática, mas procurei fazer um intensivo de 1 mês nas férias do curso na época de hardware de computador (manutenção de computadores). Já havia estuado bastante a parte teórica sobre manutenção, hardware e queria por a mão na massa. Foi esse curso que me deu a confiança necessária para me aventurar no mundo do suporte em infomática. Sempre gostei de soluciar problemas e não sabia ainda ao certo qual área dentro da área de TI que gostaria de Seguir.
            </p>
            <p className={styles.paragrafo}>
                Consegui um emprego como TI em um supermercado da minha cidade e a oportunidade de trabalhar na área estava se abrindo para o ramo de suporte em informática, infra-estrutura, hardware, software, gestão de ERP. Tudo isso dentro das condições que a empresa precisava.
            </p>
            <p className={styles.paragrafo}>
                Enquanto isso procurei fazer vários pequenos cursos de especialização dentro do ramo (supermercadista e TI). Cursos para conhecimento na área contábil, curso de técnico em eletrônica, cursos de redes. 
            </p>
            <p className={styles.paragrafo}>
                Aí veio a oportunidade de fazer faculdade. Consegui entrar no curso de Análise e Desenvolvimento de Sistemas da FATEC - Sorocaba. Eu fiquei muito feliz por ter conseguindo entrar na FATEC. Mais feliz ainda fiquei quando saí. rsrs. (Ficamos felizes quando conseguimos terminar um curso e concluir aquela jornada.)
            </p>
            <p className={styles.paragrafo}>
                O mundo de desenvolvimento front-end começou a despertar mais para o fim da faculdade quando colegas de sala de aula me indicaram plataformas de estudo. Não conhecia Caelum, Alura ( empresas grandes no ramo de ensino em tecnologia. Caelum presencial e Alura (on-line) dos mesmos diretores da Caelum).
            </p>
            <p className={styles.paragrafo}>
                Desde então tenho desenvolvido projetos e disponibilizados no github. Procurando a oportunidade de trabalhar como desenvolvedor front-end (mas encaramos full-stack, back-end também. O importante é desenvolver).
            </p>
        </PostModelo>
    )
}