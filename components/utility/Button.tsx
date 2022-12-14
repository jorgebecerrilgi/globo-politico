import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "../../styles/Button.module.css";

interface Props {
    prompt: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const Button: React.FC<Props> = ({ prompt, href, type = "button", onClick, className }): JSX.Element => {
    return href ? (
        <Link href={href} legacyBehavior>
            <button className={`${styles.button} ${className}`} type="button">
                {prompt}
            </button>
        </Link>
    ) : (
        <button className={`${styles.button} ${className}`} type={type} onClick={onClick}>
            {prompt}
        </button>
    );
};

export default Button;
