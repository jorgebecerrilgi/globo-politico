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
    return (
        <div className={`${styles.contactMe} ${className}`}>
            <h1>Contáctame</h1>
            <Input placeholder="Nombre" icon={User} />
            <Input placeholder="Correo Electrónico" icon={Email} />
            <Input placeholder="Mensaje" icon={Message} lines={8} />
			<Button className={styles.button} prompt="Enviar" />
        </div>
    );
};

export default ContactMe;
