import Input from "./Input";
import Button from "./Button";
import Pagination from "./Pagination";
import Comment from "./Comment";
import styles from "../styles/Comments.module.css";

import User from "../assets/gb_icon_user.svg";
import Message from "../assets/gb_icon_message.svg";

interface Props {
    className?: string;
}

const Comments: React.FC<Props> = ({ className }): JSX.Element => {
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
            <Comment />
            <Comment />
            <Pagination page={1} />
        </div>
    );
};

export default Comments;
