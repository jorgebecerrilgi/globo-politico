import { ChangeEvent, FormEvent, useState } from "react";
import { db } from "../../../config/firebase";
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";
import Input from "../../utility/Input";
import Button from "../../utility/Button";
import CommentPagination from "./CommentPagination";
import styles from "../../../styles/CommentSection.module.css";

import User from "../../../assets/gb_icon_user.svg";
import Message from "../../../assets/gb_icon_message.svg";

interface Props {
    className?: string;
}

type CommentData = {
    author: string;
    date: Date;
    content: string;
};

const TEMP_POST_ID: string = "estado-sin-derechos";

const createComment: (comment: CommentData) => Promise<void> = async (comment: CommentData): Promise<void> => {
    const colRef: CollectionReference<DocumentData> = collection(db, `posts/${TEMP_POST_ID}/comments`);
    const docRef: DocumentReference<DocumentData> = await addDoc(colRef, comment);
};

const CommentSection: React.FC<Props> = ({ className }): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [comment, setComment] = useState<string>("");

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newComment: CommentData = {
            author: name,
            date: new Date(),
            content: comment,
        };
        createComment(newComment);
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
            <CommentPagination postID={TEMP_POST_ID} />
        </div>
    );
};

export default CommentSection;
