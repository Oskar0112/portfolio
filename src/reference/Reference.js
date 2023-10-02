import { RefCard } from "@components/RefCard";

export const Reference = (props) => {

    const { children } = props;

    const co_worker1 = children.co_worker1;
    const co_worker2 = children.co_worker2;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <RefCard children={ co_worker1 }/>
            <RefCard children={ co_worker2 }/>
        </div>
    );
};

