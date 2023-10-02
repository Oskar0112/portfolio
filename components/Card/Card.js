import { SectionContainer } from "@components/Section";
import clsx from "clsx";


export const Card = ({
    className = "",
    children
}) => {

    return (
        <SectionContainer
            className={clsx(
                "card rounded-lg overflow-hidden",
                className
            )}
        >
            <div className="card--container">
                {children}
            </div>
        </SectionContainer>
    );
};
