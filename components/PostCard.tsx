import Image, { StaticImageData } from "next/image";
import Author from "./Author";
import Date from "./Date";
import Button from "./Button";
import styles from "../styles/PostCard.module.css";

interface Props {
    children?: JSX.Element;
    image: StaticImageData;
    title: string;
    authorName: string;
    date: string;
}

const PostCard: React.FC<Props> = ({ children, image, title, authorName, date }): JSX.Element => {
    return (
        <>
            <Image className={styles.image} alt="" src={image} fill />
            <div className={styles.gradient}></div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <span className={`${styles.new} gb-data`}>¡Nueva publicación!</span>
                    <h1>{title}</h1>
                    <div className={styles.information}>
                        <Author name={authorName} />
                        <Date date={date} />
                    </div>
                </div>
                <Button className={styles.button} prompt="Leer" />
            </div>
            {children}
        </>
    );
};

export default PostCard;
