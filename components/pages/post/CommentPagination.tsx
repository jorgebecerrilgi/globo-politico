import Pagination from "../../utility/Pagination";
import Comment from "./Comment";
import styles from "../../../styles/CommentPagination.module.css";
import {
    collection,
    CollectionReference,
    DocumentData,
    endBefore,
    getDocs,
    limit,
    orderBy,
    Query,
    query,
    QueryDocumentSnapshot,
    QueryLimitConstraint,
    QueryOrderByConstraint,
    QuerySnapshot,
    startAfter,
    Timestamp,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";

enum GetCommentsModes {
    StartAfter,
    EndBefore,
    FromStart,
}

interface Props {
    postID: string;
}

type CommentsPageData = {
    comments: QueryDocumentSnapshot<DocumentData>[];
    hasPrevious: boolean;
    hasNext: boolean;
};

const MAX_COMMENTS_PER_PAGE: number = 2;

const getCommentsSnapshot: (
    mode: GetCommentsModes,
    postID: string,
    amount: number,
    doc?: DocumentData
) => Promise<QuerySnapshot<DocumentData>> = async (
    mode: GetCommentsModes,
    postID: string,
    amount: number,
    doc?: DocumentData
): Promise<QuerySnapshot<DocumentData>> => {
    const colRef: CollectionReference<DocumentData> = collection(db, `posts/${postID}/comments`);
    const queryOrder: QueryOrderByConstraint = orderBy("date", "desc");
    const queryLimit: QueryLimitConstraint = limit(amount);
    let commentsQuery: Query<DocumentData>;
    switch (mode) {
        case GetCommentsModes.FromStart:
            commentsQuery = query(colRef, queryOrder, queryLimit);
            break;
        case GetCommentsModes.StartAfter:
            commentsQuery = query(colRef, queryOrder, startAfter(doc), queryLimit);
            break;
        case GetCommentsModes.EndBefore:
            commentsQuery = query(colRef, queryOrder, endBefore(doc), queryLimit);
            break;
        default:
            throw new Error("Unknown GetCommentsModes value when trying to query comments.");
    }
    const docSnap: QuerySnapshot<DocumentData> = await getDocs(commentsQuery);
    return docSnap;
};

const getCommentsPageData: (
    mode: GetCommentsModes,
    postID: string,
    doc?: DocumentData
) => Promise<CommentsPageData> = async (
    mode: GetCommentsModes,
    postID: string,
    doc?: DocumentData
): Promise<CommentsPageData> => {
    // Gets one more comment than MAX_COMMENTS_PER_PAGE to check if there are more left.
    const commentsSnap: QuerySnapshot<DocumentData> = await getCommentsSnapshot(
        mode,
        postID,
        MAX_COMMENTS_PER_PAGE + 1,
        doc
    );
    const hasPrevious: boolean =
        mode === GetCommentsModes.StartAfter ||
        (mode !== GetCommentsModes.FromStart && commentsSnap.size > MAX_COMMENTS_PER_PAGE);
    const hasNext: boolean = mode === GetCommentsModes.EndBefore || commentsSnap.size > MAX_COMMENTS_PER_PAGE;
    const comments: QueryDocumentSnapshot<DocumentData>[] = commentsSnap.docs.slice(0, MAX_COMMENTS_PER_PAGE);
    const pageData: CommentsPageData = {
        comments: comments,
        hasNext: hasNext,
        hasPrevious: hasPrevious,
    };
    return pageData;
};

const DEFAULT_PAGE_DATA: CommentsPageData = {
    comments: [],
    hasNext: false,
    hasPrevious: false,
};

const CommentPagination: React.FC<Props> = ({ postID }): JSX.Element => {
    const [pageData, setPageData] = useState<CommentsPageData>(DEFAULT_PAGE_DATA);
    const [paginationNumber, setPaginationNumber] = useState<number>(1);

    useEffect(() => {
        return; // REMOVE TO MAKE WORK.
        const setInitialPageData: () => Promise<void> = async (): Promise<void> => {
            setPageData(await getCommentsPageData(GetCommentsModes.FromStart, postID));
        };
        setInitialPageData();
    }, []);

    const handlePagination: (previous?: boolean) => Promise<void> = async (
        previous: boolean = false
    ): Promise<void> => {
        let mode: GetCommentsModes;
        let doc: DocumentData;
        let paginationNumberModifier: number;
        if (previous) {
            mode = GetCommentsModes.EndBefore;
            doc = pageData.comments[0];
            paginationNumberModifier = -1;
        } else {
            mode = GetCommentsModes.StartAfter;
            doc = pageData.comments[pageData.comments.length - 1];
            paginationNumberModifier = 1;
        }
        const newPageData: CommentsPageData = await getCommentsPageData(mode, postID, doc);
        setPageData(newPageData);
        setPaginationNumber((currentPaginationNumber: number) => currentPaginationNumber + paginationNumberModifier);
    };

    return (
        <div className={styles.commentPagination}>
            <Pagination
                page={paginationNumber}
                onNext={() => handlePagination()}
                onPrevious={() => handlePagination(true)}
                next={pageData.hasNext}
                back={pageData.hasPrevious}
            />
            <h2>2 comentarios</h2>
            {pageData.comments.map((comment: QueryDocumentSnapshot<DocumentData>, index: number): JSX.Element => {
                const data: DocumentData = comment.data();
                const timestamp: Timestamp = data.date;
                const date: Date = timestamp.toDate();
                return (
                    <Comment authorName={data.author} date={date} key={index}>
                        {data.content}
                    </Comment>
                );
            })}
            <Pagination
                page={paginationNumber}
                onNext={() => handlePagination()}
                onPrevious={() => handlePagination(true)}
                next={pageData.hasNext}
                back={pageData.hasPrevious}
            />
        </div>
    );
};

export default CommentPagination;
