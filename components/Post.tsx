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
    previewText: string;
    postId: string;
}

const Post: React.FC<Props> = ({ image, title, authorName, date, previewText, postId }): JSX.Element => {
    return (
        <div className={styles.post}>
            <div className={styles.card}>
                <PostCard image={image} title={title} authorName={authorName} date={date} />
            </div>
            <div className={styles.text}>
                <Author name={authorName} />
                <p>{previewText}</p>
                <div className={styles.button}>
                    <Button prompt="Seguir leyendo" href={`/post/${postId}`} />
                </div>
            </div>
        </div>
    );
};

export default Post;
