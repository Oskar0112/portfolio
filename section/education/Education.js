import { HistoryCard } from "@components/HistoryCard";

export const Education = (props) => {

    const { passdata } = props;

    const university1 = passdata.university1;
    const university2 = passdata.university2;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <HistoryCard passdata={university1} />
            <HistoryCard passdata={university2} />
        </div>
    );
};

