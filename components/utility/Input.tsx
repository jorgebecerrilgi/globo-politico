import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChangeEventHandler, useState } from "react";
import styles from "../../styles/Input.module.css";

interface Props {
    icon?: StaticImageData;
    placeholder?: string;
    type?: "text" | "date" | "email";
    lines?: number;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value?: string | number | readonly string[];
    required?: boolean;
    pattern?: string;
    errorMessage?: string;
}

const Input: React.FC<Props> = ({
    placeholder = "",
    icon,
    type = "text",
    lines = 0,
    onChange,
    value,
    required,
    pattern,
    errorMessage = "El valor es incorrecto",
}): JSX.Element => {
    const [canShowError, setCanShowError] = useState<boolean>(false);

    if (!canShowError && value) {
        setCanShowError(true);
    }

    const inputElement =
        lines < 1 ? (
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required={required}
                pattern={pattern}
            />
        ) : (
            <textarea
                placeholder={placeholder}
                cols={0}
                rows={lines}
                onChange={onChange}
                value={value}
                required={required}
            ></textarea>
        );

    return (
        <div className={`${styles.input} ${canShowError ? styles.canShowError : ""}`}>
            <div className={styles.information}>
                {icon && (
                    <div className={styles.iconWrapper}>
                        <Image className={styles.icon} src={icon} alt=""></Image>
                    </div>
                )}
                {inputElement}
            </div>
            <div className={styles.bar}></div>
            <span className={styles.error}>{errorMessage}</span>
        </div>
    );
};

export default Input;
