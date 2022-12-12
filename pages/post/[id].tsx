import Image from "next/image";
import Author from "../../components/Author";
import Date from "../../components/Date";
import BackgroundIcons from "../../components/BackgroundIcons";
import CommentSection from "../../components/CommentSection";
import styles from "../../styles/PostPage.module.css";

import Cover from "../../assets/lgbtmx.jpeg";

const PostPage: React.FC = (): JSX.Element => {
    return (
        <>
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={Cover} alt="" fill></Image>
                <div className={`${styles.gradient} ${styles.cover}`}></div>
                <div className={styles.content}>
                    <h1>La ideología de discriminar</h1>
                    <div className={styles.information}>
                        <Author name="Martín Hernández" />
                        <Date date="14 junio, 2020" />
                    </div>
                </div>
            </div>
            <BackgroundIcons className={styles.contentWrapper}>
                <p>
                    Podrás pensar que el tema de derechos LGBT ya es viejo, que México ya está en el siglo XXI y que
                    este tipo de tema ya no es motivo de debate, pero ¿Es en verdad México tan progresista y abierto
                    como pensamos? Pues en los datos del Consejo Nacional para Prevenir la Discriminación (CONAPRED) en
                    su encuesta ENADIS se demuestra otra realidad de la sociedad mexicana.
                </p>
                <p>
                    Es cierto que México ha llegado lejos en la implantación de programas contra la discriminación y en
                    materia de leyes que abren la posibilidad de matrimonios gay y adopción de parejas homoparentales,
                    sin embargo, en el país todavía hay desigualdad de derechos a lo largo de la república, pues
                    actualmente el matrimonio homosexual es solo reconocido (sin necesidad de presentar un amparo) en 10
                    estados (López, 2017), la adopción por parte de parejas homoparentales únicamente es legal en 7
                    estados (López, 2017), el cambio de sexo para personas Trans es un proceso legal sumamente
                    complicado (a excepción de la Ciudad de México) y no en todos los estados se cuenta con la misma
                    protección en contra de la discriminación como en la CDMX.
                </p>
                <p>
                    Cabe destacar los múltiples intentos por parte del gobierno mexicano a favor de los derechos de la
                    comunidad LGBTTI, como la resolución aprobada por la Suprema Corte de Justicia en 2015 que declara
                    inconstitucionales los códigos civiles de los estados donde el matrimonio es entendido como la unión
                    entre hombre y mujer que tiene como única finalidad la procreación y que obliga a los estados en
                    donde el matrimonio gay no es legal a reconocer dichos matrimonios contraídos en estados donde si es
                    legal (Gaceta del Semanario Judicial de la Federación, 2015).
                </p>
                <p>
                    Sin embargo, todavía hay un largo camino que recorrer para asegurar los derechos de la comunidad
                    LGBTTI, como se vio el 9 de noviembre de 2016 cuando la Cámara de Diputados votó en contra de la
                    propuesta del ex presidente Peña Nieto que pretendía legalizar el matrimonio de parejas homosexuales
                    en todo el país sin intervención local y realizar reformas para asegurar la protección de los
                    derechos de la comunidad LGBTTI, esta resolución dejó a la vista el conservadurismo de la sociedad
                    mexicana luego de que en respuesta del rechazo de la Cámara de Diputados a la iniciativa de Peña
                    Nieto, el Frente Nacional por la Familia celebrara la decisión de los diputados ya que esta
                    agrupación ciudadana encabezada en su mayoría por líderes religiosos llevaba meses organizando
                    marchas en contra la iniciativa.
                </p>
                <h2>La realidad mexicana</h2>
                <p>
                    En México si eres gay, lesbiana, bisexual, transgénero, transexual, intersexual o en general parte
                    de la comunidad LGBTTI te enfrentarás toda tu vida a críticas, actos intolerantes, burlas, exclusión
                    y discriminación de todo tipo, por parte de la sociedad y a veces hasta de propios familiares, todo
                    esto como lo revela la CONAPRED a través de la Encuesta Nacional sobre Discriminación en México
                    (ENADIS 2010).
                </p>
                <p>
                    Según los resultados de esta encuesta 4 de cada 10 mexicanos creen que las preferencias sexuales
                    causan mucha división entre la población, y cuando los encuestados fueron preguntados si se les
                    debería permitir a las parejas homosexuales adoptar un niño 73.5% de los encuestados respondieron
                    que no, de la misma manera se les presentó la misma pregunta, pero ahora con parejas lesbianas y el
                    promedio fue de 68% en contra.
                </p>
                <p>
                    Datos más alarmantes fueron los resultados de la pregunta “¿Estaría dispuesto o no estaría dispuesto
                    a permitir que en su casa vivieran…?” en la que al ser preguntados sobre los homosexuales el 43.7%
                    de los encuestados contestó que no permitiría que un homosexual viviera en su casa, en el caso de
                    ser preguntados sobre lesbianas las personas que se oponían aumentó al 44.1%.
                </p>
                <p>
                    La siguiente pregunta fue la de “¿qué tan positivo es para la sociedad que esté compuesta por
                    personas con diferentes orientaciones o preferencias sexuales?” en donde casi el 30% de los
                    encuestados respondió “negativo y muy negativo”, sin embargo algo muy interesante fue observar como
                    las respuestas cambiaban dependiendo al nivel de escolaridad de los encuestados en donde las
                    respuestas negativas disminuían conforme el nivel de escolaridad era mayor, empezando con 43.4% de
                    las personas sin escolaridad respondiendo “negativo” a solo el 25.4% de las personas que contaban
                    con un posgrado contestando “negativo”.
                </p>
                <p>
                    Finalmente, se les preguntó “¿Con cuál de las siguientes frases está usted más de acuerdo? Respetar
                    sus preferencias, Que oculten sus preferencias, Que cambien sus preferencias” en la que el resultado
                    fue mayormente positivo con el 72.6% contestando que se respeten sus preferencias y solo el 13%
                    contestando que cambien sus preferencias.
                </p>
                <h2>Sociedad «tradicional»</h2>
                <p>
                    México ha tomado una posición en la que se “acepta” a la comunidad LGBTTI, pero se excluye, es
                    decir, muchos mexicanos reconocen a la comunidad, pero crean una división en la que los
                    homosexuales, lesbianas, etc. están de un lado y la sociedad “convencional” del otro.
                </p>
                <p>
                    Para entender esto mejor pondré como ejemplo algo que ocurrió hace dos años en Tampico, la comunidad
                    LGBTTI de la ciudad se organizó para pintar un paseo peatonal con los colores de la bandera gay en
                    celebración del mes del orgullo, mandaron la propuesta a la presidenta municipal y la obra fue
                    aprobada. La respuesta de muchos ciudadanos fue negativa, los comentarios de una publicación sobre
                    la noticia estaban llenos con gente que daba razones como una persona que comentó “…no me parece no
                    todos tenemos esa ideología y no se nos puede imponer nada más porque les parece bonito, […] pinten
                    sus casas de colores muy sus paredes…”, otra persona también comentó “Muy mal, las familias de
                    Tampico y la región procuramos ir a la zona centro con nuestros hijos a visitar, comer, tomar café y
                    hacer compras, vemos a personas con este tipo de preferencias y nadie les falta el respeto, pero
                    sería lamentable que las autoridades empiecen a poner sus banderas y símbolos, sin tomar en cuenta a
                    la sociedad en general”.
                </p>
                <p>
                    Estos tipos de comentarios resaltan la posición de muchos mexicanos que en cierta parte “aceptan”
                    pero no incluyen a la comunidad LGBTTI, creen que ser gay es una “ideología” o una forma de vivir y
                    no una sexualidad con la que naces y no puedes cambiar, y al no reconocerla ellos pueden usar
                    argumentos como que se les “está imponiendo” en lugar de ver la realidad, que la comunidad LGBTTI no
                    organiza marchas ni crea movimientos sociales para llamar la atención, si no para celebrar el
                    orgullo de ser quién eres y mostrar fortaleza ante la discriminación que se vive cada día, para
                    mostrar que la comunidad seguirá igual de fuerte y no desaparecerá a pesar de la ignorancia de
                    muchas personas.
                </p>
                <p>
                    Todos tenemos un compromiso y una meta como mexicanos y es crear una sociedad que no discrimine ni
                    excluya si no que acepte y tolere las diferencias de cada uno que nos hacen únicos, debemos celebrar
                    estas diferencias para poder lograr un país incluyente y tolerante en donde todos pueden vivir y
                    cumplir sus sueños sin poner impedimentos a las personas solamente porque son distintas a nosotros.
                    Solo así cumpliremos el cometido.
                </p>
                <CommentSection className={styles.comments} />
            </BackgroundIcons>
        </>
    );
};

export default PostPage;
