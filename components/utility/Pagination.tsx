import Image from "next/image";
import styles from "../../styles/Pagination.module.css";

import Arrow from "../../assets/gb_icon_arrow_grey.svg";
import { MouseEventHandler } from "react";

interface Props {
    page: number;
    onNext: MouseEventHandler<HTMLButtonElement>;
    onPrevious: MouseEventHandler<HTMLButtonElement>;
    back?: boolean;
    next?: boolean;
}

const Pagination: React.FC<Props> = ({ page, onNext, onPrevious, back = false, next = false }): JSX.Element => {
    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.arrow} ${back ? styles.selected : ""}`}
                onClick={(e): void => {
                    if (back) onPrevious(e);
                }}
            >
                <Image className={styles.icon} src={Arrow} alt="" />
            </button>
            <p className="gb-data">{page}</p>
            <button
                className={`${styles.arrow} ${next ? styles.selected : ""}`}
                onClick={(e) => {
                    if (next) onNext(e);
                }}
            >
                <Image className={styles.icon} src={Arrow} alt="" />
            </button>
        </div>
    );
};

export default Pagination;
