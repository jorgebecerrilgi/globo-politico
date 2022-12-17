import Head from "next/head";
import PostCard from "../components/pages/PostCard";
import BackgroundIcons from "../components/utility/BackgroundIcons";
import PostSection from "../components/pages/PostSection";
import ContactMe from "../components/pages/ContactMe";
import styles from "../styles/Home.module.css";

import { GetStaticProps } from "next";
import {
    CollectionReference,
    DocumentData,
    QueryDocumentSnapshot,
    QuerySnapshot,
    Timestamp,
    collection,
    getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";

type ImageData = {
    src: string;
    alt: string;
    credits: string;
};

type DateData = {
    seconds: number;
    nanoseconds: number;
};

type PostData = {
    id: string;
    title: string;
    author: string;
    date: DateData;
    image: ImageData;
    content: string;
    preview: string;
};

export const getStaticProps: GetStaticProps = async () => {
    const colRef: CollectionReference = collection(db, "posts");
    const querySnap: QuerySnapshot<DocumentData> = await getDocs(colRef);
    const docs: QueryDocumentSnapshot<DocumentData>[] = querySnap.docs;

    const allPosts: PostData[] = docs.map((doc: QueryDocumentSnapshot<DocumentData>): PostData => {
        const docData: DocumentData = doc.data();
        const postTimestamp: Timestamp = docData.date;
        const post: PostData = {
            id: doc.id,
            title: docData.title,
            author: docData.author,
            date: {
                seconds: postTimestamp.seconds,
                nanoseconds: postTimestamp.nanoseconds,
            },
            image: {
                src: docData.image.src,
                alt: docData.image.alt,
                credits: docData.image.credits,
            },
            content: docData.content,
            preview: docData.preview,
        };
        return post;
    });

    const staticProps: Props = {
        frontPost: allPosts[0],
        posts: allPosts.slice(1),
    };

    return {
        props: staticProps,
    };
};

interface Props {
    frontPost: PostData;
    posts: PostData[];
}

const Home: React.FC<Props> = ({ frontPost, posts }): JSX.Element => {
    const frontPostTimestamp: Timestamp = new Timestamp(frontPost.date.seconds, frontPost.date.nanoseconds);
    const frontPostDate: Date = frontPostTimestamp.toDate();

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
                    image={frontPost.image.src}
                    title={frontPost.title}
                    authorName={frontPost.author}
                    date={frontPostDate}
                    postId={frontPost.id}
                    isCover={true}
                ></PostCard>
            </div>
            {/* Front Post END */}
            <BackgroundIcons>
                <PostSection posts={posts} />
                <ContactMe className={styles.contactMe} />
            </BackgroundIcons>
        </>
    );
};

export default Home;
