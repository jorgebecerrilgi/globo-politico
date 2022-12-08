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
    isCover?: boolean;
}

const PostCard: React.FC<Props> = ({ children, image, title, authorName, date, isCover = false }): JSX.Element => {
    return isCover ? (
        <>
            <Image className={styles.image} alt="" src={image} fill />
            <div className={`${styles.gradient} ${styles.cover}`}></div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <span className={`${styles.new} gb-data`}>¡Nueva publicación!</span>
                    <h1>{title}</h1>
                    <div className={styles.information}>
                        <Author name={authorName} />
                        <Date date={date} />
                    </div>
                </div>
                <Button prompt="Leer" />
            </div>
            {children}
        </>
    ) : (
        <>
            <Image className={styles.image} alt="" src={image} fill />
            <div className={styles.gradient}></div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <div className={styles.information}>
                        <Date date={date} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostCard;
