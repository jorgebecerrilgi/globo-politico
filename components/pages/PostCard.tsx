import Image, { StaticImageData } from "next/image";
import Author from "../utility/Author";
import Date from "../utility/Date";
import Button from "../utility/Button";
import styles from "../../styles/PostCard.module.css";

interface Props {
    children?: JSX.Element;
    image: StaticImageData;
    title: string;
    authorName: string;
    date: string | Date;
    postId?: string;
    isCover?: boolean;
}

const PostCard: React.FC<Props> = ({
    children,
    image,
    title,
    authorName,
    date,
    postId,
    isCover = false,
}): JSX.Element => {
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
                <Button prompt="Leer" href={`/post/${postId}`} />
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
