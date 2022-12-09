import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "../styles/Input.module.css";

interface Props {
    icon?: StaticImageData;
    placeholder?: string;
    lines?: number;
}

const Input: React.FC<Props> = ({ placeholder = "", icon, lines = 0 }): JSX.Element => {
    return (
        <div className={styles.input}>
            <div className={styles.information}>
                {icon && (
                    <div className={styles.iconWrapper} style={{ placeSelf: lines < 1 ? "" : "flex-start" }}>
                        <Image className={styles.icon} src={icon} alt=""></Image>
                    </div>
                )}
                {lines < 1 ? (
                    <input type="text" placeholder={placeholder} />
                ) : (
                    <textarea placeholder={placeholder} cols={0} rows={lines}></textarea>
                )}
            </div>
            <div className={styles.bar}></div>
        </div>
    );
};

export default Input;
