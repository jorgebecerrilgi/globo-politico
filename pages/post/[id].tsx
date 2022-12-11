import Image from "next/image";
import Author from "../../components/Author";
import Date from "../../components/Date";
import styles from "../../styles/PostPage.module.css";

import Cover from "../../assets/lgbtmx.jpeg";

const PostPage: React.FC = (): JSX.Element => {
    return (
        <>
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={Cover} alt="" fill></Image>
                <div className={`${styles.gradient} ${styles.cover}`}></div>
                <div className={styles.content}>
                    <h1>La ideología de discriminar</h1>
                    <div className={styles.information}>
                        <Author name="Martín Hernández" />
                        <Date date="14 junio, 2020" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostPage;
