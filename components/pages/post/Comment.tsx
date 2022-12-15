import Author from "../../utility/Author";
import DateTagline from "../../utility/DateTagline";
import styles from "../../../styles/Comment.module.css";

interface Props {
    authorName: string;
    date: string | Date;
    className?: string;
    children: string;
}

const Comment: React.FC<Props> = ({ authorName, date, className, children }): JSX.Element => {
    return (
        <div className={`${styles.comment} ${className}`}>
            <div className={styles.information}>
                <Author name={authorName} />
                <DateTagline date={date} />
            </div>
            <p>{children}</p>
        </div>
    );
};

export default Comment;
