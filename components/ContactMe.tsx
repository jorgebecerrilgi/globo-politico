import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import styles from "../styles/ContactMe.module.css";

import User from "../assets/gb_icon_user.svg";
import Email from "../assets/gb_icon_email.svg";
import Message from "../assets/gb_icon_message.svg";

interface Props {
    className?: string;
}

const ContactMe: React.FC<Props> = ({ className = "" }): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
