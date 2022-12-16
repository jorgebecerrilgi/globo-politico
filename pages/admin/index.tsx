import { ChangeEvent, FormEvent, LegacyRef, MutableRefObject, RefObject, useRef, useState } from "react";
import Input from "../../components/utility/Input";
import Button from "../../components/utility/Button";
import styles from "../../styles/Admin.module.css";

import { db, storage } from "../../config/firebase";
import { doc, setDoc, DocumentReference, getDoc, DocumentSnapshot, DocumentData } from "firebase/firestore";
import { StorageReference, ref, uploadBytes, StorageError, getDownloadURL } from "firebase/storage";

type ImageData = {
    src: string;
    alt: string;
    credits: string;
};

type PostData = {
    title: string;
    author: string;
    date: Date;
    image: ImageData;
    content: string;
    preview: string;
};

const getDateString: (date: Date) => string = (date: Date): string => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    // Format is YYYY-MM-DD.
    return `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
};

const getDate: (date: string) => Date = (date: string): Date => {
    const [year, month, day]: string[] = date.split("-");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

const titleToPostID: (title: string) => string = (title: string): string => {
    let postID: string = "";
    for (let char of title.toLowerCase()) {
        if (char.search("[a-z0-9]") == 0) postID += char;
        else if (char === " ") postID += "-";
        else if (char === "á") postID += "a";
        else if (char === "é") postID += "e";
        else if (char === "í") postID += "i";
        else if (char === "ó") postID += "o";
        else if (char === "ú" || char === "ü") postID += "u";
        else if (char === "ñ") postID += "n";
    }
    return postID;
};

const contentToPreview: (content: string) => string = (content: string): string => {
    const MAX_WORDS = 50;
    const MAX_CHARACTERS = 300;
    let preview: string = "";
    preview = content.split(/ |\n/, MAX_WORDS).join(" ");
    if (preview.length > MAX_CHARACTERS) {
        const newLastIndex: number = preview.lastIndexOf(" ", MAX_CHARACTERS - 1);
        preview = preview.substring(0, newLastIndex);
    }
    return preview + "...";
};

const checkIfPostExists: (post: PostData) => Promise<boolean> = async (post: PostData): Promise<boolean> => {
    const docRef: DocumentReference<DocumentData> = doc(db, "posts", titleToPostID(post.title));
    const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
    return docSnap.exists();
};

const createPost: (post: PostData, postID: string) => Promise<void> = async (
    post: PostData,
    postID: string
): Promise<void> => {
    const docRef: DocumentReference<DocumentData> = doc(db, "posts", postID);
    await setDoc(docRef, post);
};

const uploadImage: (imageFile: File, fileRef: StorageReference) => Promise<boolean> = async (
    imageFile: File,
    fileRef: StorageReference
): Promise<boolean> => {
    try {
        await uploadBytes(fileRef, imageFile);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

const Admin = () => {
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("Martín Hernández");
    const [date, setDate] = useState<string>(getDateString(new Date()));
    const [imageDescription, setImageDescription] = useState<string>("");
    const [imageCredits, setImageCredits] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const inputFileElement: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const resetData: () => void = (): void => {
        setTitle("");
        setAuthor("Martín Hernández");
        setDate(getDateString(new Date()));
        if (inputFileElement.current) inputFileElement.current.files = null;
        setImageDescription("");
        setImageCredits("");
        setContent("");
    };

    const handleOnSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        if (!inputFileElement.current?.files?.length || inputFileElement.current.files.length === 0) return;
        const imageFile: File = inputFileElement.current.files[0];
        const postID: string = titleToPostID(title);
        const fileRef: StorageReference = ref(storage, `${postID}/${imageFile.name}`);
        const imageUploadedSuccessfully: boolean = await uploadImage(imageFile, fileRef);
        if (!imageUploadedSuccessfully) return;
        const imageURL: string = await getDownloadURL(fileRef);
        const newPost: PostData = {
            title: title,
            author: author,
            date: getDate(date),
            image: {
                src: imageURL,
                alt: imageDescription,
                credits: imageCredits,
            },
            content: content,
            preview: contentToPreview(content),
        };
        if (await checkIfPostExists(newPost)) {
            window.alert("A post with that title already exists!");
            return;
        }
        createPost(newPost, postID);
        resetData();
    };

    return (
        <div className={styles.admin}>
            <h1>Nueva Publicación</h1>
            <form onSubmit={handleOnSubmit}>
                <Input
                    placeholder="Título"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value.trimStart())}
                    value={title}
                    errorMessage="Escribe un título para el artículo"
                    required
                />
                <Input
                    placeholder="Nombre del autor"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value.trimStart())}
                    value={author}
                    errorMessage="Escribe el nombre del autor"
                    required
                />
                <Input
                    type="date"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                    value={date}
                    errorMessage="Debe haber una fecha"
                    required
                />
                <input
                    ref={inputFileElement}
                    type="file"
                    accept="image/jpeg"
                    placeholder="Imagen principal del artículo"
                    required
                />
                <span className="gb-data">La imagen debe pesar menos de 256kb.</span>
                <Input
                    placeholder="La torre eiffel durante la noche, con..."
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setImageDescription(e.target.value.trimStart())}
                    value={imageDescription}
                    errorMessage="Escribe una descripción breve de tu imagen para ser accesibles"
                    required
                />
                <Input
                    placeholder="Gráfico de Imgur, por John Doe"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setImageCredits(e.target.value.trimStart())}
                    value={imageCredits}
                />
                <Input
                    placeholder="Escribe aquí tu artículo..."
                    lines={15}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value.trimStart())}
                    value={content}
                    errorMessage="Escribe el contenido del artículo"
                    required
                />
                <Button prompt="Publicar" type="submit" />
            </form>
        </div>
    );
};

export default Admin;
