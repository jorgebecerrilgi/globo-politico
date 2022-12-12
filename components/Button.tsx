import styles from "../styles/Button.module.css";
import { Property } from "../node_modules/csstype/index";
import Link from "next/link";

interface Props {
    prompt: string;
    href?: string;
    className?: string;
}

const Button: React.FC<Props> = ({ prompt, href = "/", className }): JSX.Element => {
    return (
        <Link href={href}>
            <button className={`${styles.button} ${className}`} type="button">
                {prompt}
            </button>
        </Link>
    );
};

export default Button;
