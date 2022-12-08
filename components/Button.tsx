import styles from "../styles/Button.module.css";
import { Property } from "../node_modules/csstype/index";

interface Props {
    prompt: string;
    className?: string;
}

const Button: React.FC<Props> = ({ prompt, className }): JSX.Element => {
    return (
        <button className={`${styles.button} ${className}`} type="button">
            {prompt}
        </button>
    );
};

export default Button;
