import Input from "../../utility/Input";
import Button from "../../utility/Button";
import Pagination from "../../utility/Pagination";
import Comment from "./Comment";
import styles from "../../../styles/CommentSection.module.css";

import User from "../../../assets/gb_icon_user.svg";
import Message from "../../../assets/gb_icon_message.svg";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    className?: string;
}

const TEMP_POST_ID: string = "estado-sin-derechos";

const CommentSection: React.FC<Props> = ({ className }): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [comment, setComment] = useState<string>("");

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className={`${styles.comments} ${className}`}>
            <h1>Comentarios</h1>
            <form onSubmit={handleOnSubmit}>
                <Input
                    placeholder="Nombre"
                    icon={User}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value.trimStart())}
                    value={name}
                    errorMessage="Escribe tu nombre"
                    required
                />
                <Input
                    placeholder="Comentario"
                    icon={Message}
                    lines={8}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value.trimStart())}
                    value={comment}
                    errorMessage="Escribe tu comentario"
                    required
                />
                <Button prompt="Publicar" type="submit" />
            </form>
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
