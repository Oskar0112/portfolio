import { RefCard } from "@components/RefCard";

export const Reference = (props) => {

    const { passdata } = props;

    const co_worker1 = passdata.co_worker1;
    const co_worker2 = passdata.co_worker2;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <RefCard passdata={ co_worker1 }/>
            <RefCard passdata={ co_worker2 }/>
        </div>
    );
};

