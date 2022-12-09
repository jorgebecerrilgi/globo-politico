import { StaticImageData } from "next/image";
import Pagination from "./Pagination";
import Post from "./Post";
import styles from "../styles/PostSection.module.css";

import ImageMundo from "../assets/DELETE_mundoalreves.jpg";
import ImageYouth from "../assets/DELETE_youth.jpg";
import ImageAutocracy from "../assets/DELETE_autocracy.jpeg";

type PostData = {
    title: string;
    authorName: string;
    date: string;
    image: StaticImageData;
    previewText: string;
};

const PostSection: React.FC = (): JSX.Element => {
    const data: PostData[] = [
        {
            title: "EL MUNDO AL REVÉS: Cuando la realidad deja de ser relevante",
            authorName: "Martín Hernández",
            date: "29 agosto, 2020",
            image: ImageMundo,
            previewText:
                "He escrito y pensado mucho sobre este fenómeno de populismo que inundó las elecciones de México," +
                "Estados Unidos, Europa y muchos países más. He hablado, en las anteriores entradas de este blog," +
                "extensivamente sobre las características y los matices de los candidatos de este movimiento; figuras" +
                "que se hacen llamar diferentes a la clase política…",
        },
        {
            title: "The Youth's Fight",
            authorName: "Martín Hernández",
            date: "25 mayo, 2020",
            image: ImageYouth,
            previewText:
                "Imagine you're on a boat in the middle of the ocean, the boat is commanded by a tyrannical" +
                "old man who eats all of the food and leaves the others with the crumbs, the boat is sailing without" +
                "course because the captain doesn't care as long as he has food for himself. On top of...",
        },
        {
            title: "Why progress does not justify an autocracy",
            authorName: "Martín Hernández",
            date: "25 mayo, 2020",
            image: ImageAutocracy,
            previewText:
                "Recently, while doing a school assignment, I came across a Mexican survey about political culture" +
                "and civil practices. This survey interrogated Mexican citizens on a variety of subjects, ranging" +
                "from common knowledge questions about Mexico’s government, to questions about their political" +
                "preferences and opinions...",
        },
    ];

    return (
        <div className={styles.postSection}>
            <Pagination page={1} />
            {data.map((post: PostData, idx: number): JSX.Element => {
                return (
                    <Post
                        title={post.title}
                        authorName={post.authorName}
                        date={post.date}
                        image={post.image}
                        previewText={post.previewText}
                        key={idx}
                    />
                );
            })}
            <Pagination page={1} />
        </div>
    );
};

export default PostSection;
