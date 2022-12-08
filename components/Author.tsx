import { StaticImageData } from "next/image";
import styles from "../styles/Author.module.css";

interface Props {
    name: string;
    picture?: StaticImageData;
}

const Author: React.FC<Props> = ({ picture, name }): JSX.Element => {
    return (
        <div className={styles.author}>
            <div className={styles.picture}></div>
            <span className={`${styles.name} gb-data`}>{name}</span>
        </div>
    );
};

export default Author;
