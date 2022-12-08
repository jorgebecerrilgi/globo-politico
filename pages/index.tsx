import Head from "next/head";
import Link from "next/link";
import PostCard from "../components/PostCard";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import Post from "../components/Post";
import PostSection from "../components/PostSection";
import styles from "../styles/Home.module.css";

import Cover from "../assets/lgbtmx.jpeg";

const Home: React.FC = (): JSX.Element => {
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
            <PostSection />
        </>
    );
};

export default Home;
