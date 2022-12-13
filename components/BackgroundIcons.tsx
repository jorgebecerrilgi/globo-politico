import { useEffect, useState } from "react";
import styles from "../styles/BackgroundIcons.module.css";

interface Props {
    maxDisplacementPixels?: number;
    className?: string;
    children: JSX.Element | JSX.Element[];
}

const BackgroundIcons: React.FC<Props> = ({ maxDisplacementPixels = 480, className, children }): JSX.Element => {
    const [displacement, setDisplacement] = useState<number>(0);

    useEffect((): void => {
        document.addEventListener("scroll", (e: Event): void => {
            e.preventDefault();
            const newDisplacement = maxDisplacementPixels * (window.scrollY / document.body.scrollHeight);
            setDisplacement(newDisplacement);
        });
    }, []);

    return (
        <div className={`${styles.backgroundIcons} ${className}`}>
            {/* Background Icons */}
            <div
                className={styles.icons}
                style={{ translate: `0 -${displacement}px`, height: `calc(100% + ${maxDisplacementPixels}px)` }}
            ></div>
            {/* Gradient */}
            <div className={styles.gradient}></div>
            {children}
        </div>
    );
};

export default BackgroundIcons;
