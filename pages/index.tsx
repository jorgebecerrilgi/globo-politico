import Head from "next/head";
import PostCard from "../components/PostCard";
import BackgroundIcons from "../components/BackgroundIcons";
import PostSection from "../components/PostSection";
import ContactMe from "../components/ContactMe";
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
            {/* Front Post  START */}
            <div className={styles.frontPost}>
                <PostCard
                    image={Cover}
                    title="La ideología de discriminar"
                    authorName="Martín Hernández"
                    date="14 junio, 2020"
                    postId="La ideología de discriminar"
                    isCover={true}
                ></PostCard>
            </div>
            {/* Front Post END */}
            <BackgroundIcons>
                <PostSection />
                <ContactMe className={styles.contactMe} />
            </BackgroundIcons>
        </>
    );
};

export default Home;
