import { getTextAlign } from "@utils/helper";

export const Content = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <div
            className={`content text-lg md:text-xl max-w-2xl text-black/60 ${className && className
                } ${alignClass && alignClass}`}
        >
            {children}
        </div>
    );
};
