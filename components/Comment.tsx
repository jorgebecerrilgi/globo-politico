import Author from "./Author";
import Date from "./Date";
import styles from "../styles/Comment.module.css";

interface Props {
    authorName: string;
    date: string;
    className?: string;
    children: string;
}

const Comment: React.FC<Props> = ({ authorName, date, className, children }): JSX.Element => {
    return (
        <div className={`${styles.comment} ${className}`}>
            <div className={styles.information}>
                <Author name={authorName} />
                <Date date={date} />
            </div>
            <p>{children}</p>
        </div>
    );
};

export default Comment;
