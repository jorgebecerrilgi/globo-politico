import Image from "next/image";
import styles from "../styles/Pagination.module.css";

import Arrow from "../assets/gb_icon_arrow_grey.svg";

interface Props {
    page: number;
    back?: boolean;
    next?: boolean;
}

const Pagination: React.FC<Props> = ({ page, back = false, next = false }): JSX.Element => {
    return (
        <div className={styles.pagination}>
            <button className={`${styles.arrow} ${back ? styles.selected : ""}`}>
                <Image className={styles.icon} src={Arrow} alt="" />
            </button>
            <p className="gb-data">{page}</p>
            <button className={`${styles.arrow} ${next ? styles.selected : ""}`}>
                <Image className={styles.icon} src={Arrow} alt="" />
            </button>
        </div>
    );
};

export default Pagination;
