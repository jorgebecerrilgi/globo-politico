import { StaticImageData } from "next/image";
import Pagination from "../utility/Pagination";
import Post from "./Post";
import styles from "../../styles/PostSection.module.css";

import { Timestamp } from "firebase/firestore";
import { useState } from "react";

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

const MAX_POSTS_PER_PAGE: number = 3;

interface Props {
    posts: PostData[];
}

const PostSection: React.FC<Props> = ({ posts }): JSX.Element => {
    const [paginationNumber, setPaginationNumber] = useState<number>(1);
    const paginationBack: boolean = paginationNumber > 1;
    const paginationNext: boolean = paginationNumber <= (posts.length - 1) / MAX_POSTS_PER_PAGE;
    const currentPagePostIndex: number = (paginationNumber - 1) * MAX_POSTS_PER_PAGE;
    const postsOnCurrentPage: PostData[] = posts.slice(currentPagePostIndex, currentPagePostIndex + MAX_POSTS_PER_PAGE);

    const handleOnNext: () => void = (): void => {
        setPaginationNumber((currentPaginationNumber: number): number => {
            return currentPaginationNumber + 1;
        });
    };

    const handleOnPrevious: () => void = (): void => {
        setPaginationNumber((currentPaginationNumber: number): number => {
            return currentPaginationNumber - 1;
        });
    };

    return (
        <div className={styles.postSection}>
            <Pagination
                page={paginationNumber}
                back={paginationBack}
                next={paginationNext}
                onNext={handleOnNext}
                onPrevious={handleOnPrevious}
            />
            {postsOnCurrentPage.map((post: PostData, idx: number): JSX.Element => {
                const postTimestamp: Timestamp = new Timestamp(post.date.seconds, post.date.nanoseconds);
                const postDate: Date = postTimestamp.toDate();
                return (
                    <Post
                        postId={post.id}
                        title={post.title}
                        authorName={post.author}
                        date={postDate}
                        image={post.image.src}
                        previewText={post.preview}
                        key={idx}
                    />
                );
            })}
            <Pagination
                page={paginationNumber}
                back={paginationBack}
                next={paginationNext}
                onNext={handleOnNext}
                onPrevious={handleOnPrevious}
            />
        </div>
    );
};

export default PostSection;
