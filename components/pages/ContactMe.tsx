import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../utility/Input";
import Button from "../utility/Button";
import styles from "../../styles/ContactMe.module.css";

import User from "../../public/gb_icon_user.svg";
import Email from "../../public/gb_icon_email.svg";
import Message from "../../public/gb_icon_message.svg";
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

interface Props {
    className?: string;
}

type MessageData = {
    name: string;
    email: string;
    message: string;
};

const createMessage: (message: MessageData) => Promise<void> = async (message: MessageData): Promise<void> => {
    const colRef: CollectionReference<DocumentData> = collection(db, "messages");
    const docRef: DocumentReference<DocumentData> = await addDoc(colRef, message);
};

const ContactMe: React.FC<Props> = ({ className = "" }): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const clearInputs: () => void = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newMessage: MessageData = {
            name: name,
            email: email,
            message: message,
        };
        createMessage(newMessage);
        clearInputs();
    };

    return (
        <div className={`${styles.contactMe} ${className}`}>
            <h1>Contáctame</h1>
            <form onSubmit={handleOnSubmit}>
                <Input
                    placeholder="Nombre"
                    icon={User}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value.trimStart())}
                    value={name}
                    required
                    errorMessage="Escribe tu nombre"
                />
                <Input
                    placeholder="correo@ejemplo.com"
                    icon={Email}
                    type="email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.trim())}
                    value={email}
                    pattern=".+@.+\..+"
                    required
                    errorMessage="El correo electrónico es inválido"
                />
                <Input
                    placeholder="Mensaje"
                    icon={Message}
                    lines={8}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value.trimStart())}
                    value={message}
                    required
                    errorMessage="Escribe tu mensaje"
                />
                <Button className={styles.button} prompt="Enviar" type="submit" />
            </form>
        </div>
    );
};

export default ContactMe;
