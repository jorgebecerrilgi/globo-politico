import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

import Logo from "../assets/gb_white_pink.svg";
import IconHome from "../assets/gb_icon_home.svg";
import IconTwitter from "../assets/gb_icon_twitter.svg";
import IconSearch from "../assets/gb_icon_search.svg";

interface Props {
    children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <>
            {children}
            <nav className={styles.navBar}>
                {/* Logo */}
                <Image src={Logo} alt="" className={`${styles.navIcon} ${styles.navLogo}`}></Image>
                {/* Iconos */}
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" className={styles.navIconWrapper}>
                            <Image src={IconHome} alt="" className={styles.navIcon}></Image>
                        </Link>
                    </li>
                    <li>
                        <a
                            className={styles.navIconWrapper}
                            target="_blank"
                            href="https://twitter.com/globo_politico"
                            rel="noopener noreferrer"
                        >
                            <Image src={IconTwitter} alt="" className={styles.navIcon}></Image>
                        </a>
                    </li>
                    <li>
                        <Link href="/" className={styles.navIconWrapper}>
                            <Image src={IconSearch} alt="" className={styles.navIcon}></Image>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Layout;
