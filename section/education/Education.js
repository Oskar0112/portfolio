import { HistoryCard } from "@components/HistoryCard";

export const Education = (props) => {

    const { passdata } = props;

    const university1 = passdata.university1;

    return (
        <div className="flex items-center justify-center">
            <HistoryCard passdata={university1} />
        </div>
    );
};

