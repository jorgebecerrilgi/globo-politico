import Author from "./Author";
import Date from "./Date";
import styles from "../styles/Comment.module.css";

const Comment: React.FC = (): JSX.Element => {
    return (
        <div className={styles.comment}>
            <div className={styles.information}>
                <Author name="Jane Doe" />
                <Date date="14 octubre, 2020" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi a natus deserunt explicabo? Magnam
                illum assumenda eius voluptates molestiae, earum, itaque, voluptatem voluptate odio vitae nihil quisquam
                non veritatis!
            </p>
        </div>
    );
};

export default Comment;
