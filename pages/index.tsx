import Head from "next/head";
import PostCard from "../components/PostCard";
import PostSection from "../components/PostSection";
import styles from "../styles/Home.module.css";

import Cover from "../assets/lgbtmx.jpeg";
import React, { useEffect, useState } from "react";

const MAX_DISPLACEMENT_PIXELS = 360;

const Home: React.FC = (): JSX.Element => {
    const [displacement, setDisplacement] = useState<number>(0);

    useEffect((): void => {
        document.addEventListener("scroll", (e: Event) => {
            e.preventDefault();
            const newDisplacement = MAX_DISPLACEMENT_PIXELS * (window.scrollY / document.body.scrollHeight);
            setDisplacement(newDisplacement);
        });
    }, []);

    return (
        <>
            <Head>
                <title>Globo Político</title>
                <meta name="description" content="Blog personal" />
                <meta name="keywords" content="blog, politica, politics, mexico" />
                <meta name="author" content="Martin Hernández" />
                <link rel="icon" type="image/svg+xml" href="/globo_politico.svg" />
            </Head>
            {/* Front Post */}
            <div className={styles.frontPost}>
                <PostCard
                    image={Cover}
                    title="La ideología de discriminar"
                    authorName="Martín Hernández"
                    date="14 junio, 2020"
                    isCover={true}
                ></PostCard>
            </div>
            <div className={styles.background}>
                <div
                    className={styles.icons}
                    style={{ translate: `0 -${displacement}px`, height: `calc(100% + ${MAX_DISPLACEMENT_PIXELS}px)` }}
                ></div>
                <div className={styles.gradient}></div>
                <PostSection />
            </div>
        </>
    );
};

export default Home;
