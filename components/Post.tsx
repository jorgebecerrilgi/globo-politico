import { StaticImageData } from "next/image";
import PostCard from "./PostCard";
import Author from "./Author";
import Button from "./Button";
import styles from "../styles/Post.module.css";

interface Props {
    image: StaticImageData;
    title: string;
    authorName: string;
    date: string;
}

const Post: React.FC<Props> = ({ image, title, authorName, date }): JSX.Element => {
    return (
        <div className={styles.post}>
            <div className={styles.card}>
                <PostCard image={image} title={title} authorName={authorName} date={date} />
            </div>
            <div className={styles.text}>
                <Author name={authorName} />
                <p>
                    He escrito y pensado mucho sobre este fenómeno de populismo que inundó las elecciones de México,
                    Estados Unidos, Europa y muchos países más. He hablado, en las anteriores entradas de este blog,
                    extensivamente sobre las características y los matices de los candidatos de este movimiento; figuras
                    que se hacen llamar diferentes a la clase política…
                </p>
                <div className={styles.button}>
                    <Button prompt="Seguir leyendo" />
                </div>
            </div>
        </div>
    );
};

export default Post;
