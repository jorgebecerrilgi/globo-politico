const MONTHS: string[] = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

const dateToString: (date: Date) => string = (date: Date): string => {
    const day: number = date.getDate();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    return `${day} ${MONTHS[month]}, ${year}`;
};

interface Props {
    date: string | Date;
}

const DateTagline: React.FC<Props> = ({ date }): JSX.Element => {
    if (date instanceof Date) {
        date = dateToString(date);
    }
    return <span className={`gb-data`}>{date}</span>;
};

export default DateTagline;
