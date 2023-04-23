import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrado from "paginas/NaoEncontrado";
import PaginaPadrao from "componentes/PaginaPadrao";
import styles from './Post.module.css';
import PostCard from "componentes/PostCard";

export default function Post() {

    const parametros = useParams();

    const post = posts.find(post => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrado />
    }

    const postsRecomendados = posts
        .filter(post => post.id !== Number(parametros.id))
        .sort((a, b) => {
            return b.id - a.id
        })
        .slice(0, 4);

    console.log(postsRecomendados);

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={styles.postsRecomendados}>
                    {
                        postsRecomendados.map(post => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))
                    }
                </ul>

            </PostModelo>
        </PaginaPadrao>



    )
}