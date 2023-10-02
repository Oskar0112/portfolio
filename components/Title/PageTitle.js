import { SectionContainer } from "@components/Section";
import clsx from "clsx";

const titleVariant = {
    heavy: "text-3xl lg:text-4xl",
    default: "text-2xl lg:text-3xl"
};
export const PageTitle = ({ children, className = "", type = "" }) => {
    const titleClass = clsx("h3 font-semibold", titleVariant[type], className);
    return (
        <SectionContainer
            className={`page-title--content max-w-2xl ${className && className
                }`}
        >
            <h1 className={titleClass}>{children}</h1>
        </SectionContainer>
    );
};
