import { HistoryCard } from "@components/HistoryCard";

export const Education = (props) => {

    const { children } = props;

    const university1 = children.university1;
    const university2 = children.university2;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <HistoryCard children={university1} />
            <HistoryCard children={university2} />
        </div>
    );
};

