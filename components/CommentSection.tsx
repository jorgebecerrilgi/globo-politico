import Input from "./Input";
import Button from "./Button";
import Pagination from "./Pagination";
import Comment from "./Comment";
import styles from "../styles/CommentSection.module.css";

import User from "../assets/gb_icon_user.svg";
import Message from "../assets/gb_icon_message.svg";

interface Props {
    className?: string;
}

const CommentSection: React.FC<Props> = ({ className }): JSX.Element => {
    return (
        <div className={`${styles.comments} ${className}`}>
            <h1>Comentarios</h1>
            <div className={styles.inputs}>
                <Input placeholder="Nombre" icon={User} />
                <Input placeholder="Comentario" icon={Message} lines={8} />
                <Button prompt="Publicar" />
            </div>
            <Pagination page={1} />
            <h2>2 comentarios</h2>
            <Comment authorName="Martín Hernández" date="24 octubre, 2020">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, officiis.
            </Comment>
            <Pagination page={1} />
        </div>
    );
};

export default CommentSection;
