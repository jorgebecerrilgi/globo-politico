interface Props {
    date: string;
}

const Date: React.FC<Props> = ({ date }): JSX.Element => {
    return <span className={`gb-data`}>{date}</span>;
};

export default Date;
