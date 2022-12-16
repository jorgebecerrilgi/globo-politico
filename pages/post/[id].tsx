import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { db } from "../../config/firebase";
import {
    collection,
    CollectionReference,
    doc,
    DocumentData,
    DocumentReference,
    DocumentSnapshot,
    getDoc,
    getDocs,
    QueryDocumentSnapshot,
    QuerySnapshot,
    Timestamp,
} from "firebase/firestore";
import Author from "../../components/utility/Author";
import DateTagline from "../../components/utility/DateTagline";
import BackgroundIcons from "../../components/utility/BackgroundIcons";
import CommentSection from "../../components/pages/post/CommentSection";
import styles from "../../styles/PostPage.module.css";

import Cover from "../../assets/lgbtmx.jpeg";

export const getStaticPaths: GetStaticPaths = async () => {
    const colRef: CollectionReference<DocumentData> = collection(db, "posts");
    const querySnap: QuerySnapshot<DocumentData> = await getDocs(colRef);

    const paths = querySnap.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        return {
            params: {
                id: doc.id,
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let props: Props = {
        id: "",
        title: "NaN",
        author: "NaN",
        date: {
            seconds: 0,
            nanoseconds: 0,
        },
        image: {
            src: "",
            alt: "",
            credits: "",
        },
        content: "NaN",
    };
    if (params && params.id && typeof params.id === "string") {
        const docID: string = params.id;
        const docRef: DocumentReference<DocumentData> = doc(db, `posts/${docID}`);
        const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
        if (docSnap.exists()) {
            const data: DocumentData = docSnap.data();
            const timestamp: Timestamp = data.date;
            const docProps: Props = {
                id: docID,
                title: data.title,
                author: data.author,
                date: {
                    seconds: timestamp.seconds,
                    nanoseconds: timestamp.nanoseconds,
                },
                image: {
                    src: data.image.src,
                    alt: data.image.alt,
                    credits: data.image.credits,
                },
                content: data.content,
            };
            props = { ...docProps };
        }
    }
    return {
        props: props,
    };
};

type ImageData = {
    src: string;
    alt: string;
    credits: string;
};

type DateData = {
    seconds: number;
    nanoseconds: number;
};

interface Props {
    id: string;
    title: string;
    author: string;
    date: DateData;
    image: ImageData;
    content: string;
}

const PostPage: React.FC<Props> = ({ title, author, date, image, content, id }): JSX.Element => {
    const timestamp: Timestamp = new Timestamp(date.seconds, date.nanoseconds);

    return (
        <>
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={image.src} alt={image.alt} fill></Image>
                <div className={`${styles.gradient} ${styles.cover}`}></div>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <div className={styles.information}>
                        <Author name={author} />
                        <DateTagline date={timestamp.toDate()} />
                    </div>
                </div>
            </div>
            <BackgroundIcons className={styles.contentWrapper}>
                <p>{content}</p>
                <CommentSection className={styles.comments} postID={id} />
            </BackgroundIcons>
        </>
    );
};

export default PostPage;
