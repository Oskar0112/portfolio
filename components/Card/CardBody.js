export const CardBody = ({ children, className, newsite }) => {

    const visit = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className={`card--body ${className && className}`}>
            {children}
            <div className="flex justify-center">
                <button
                    onClick={() => visit(newsite)}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold item-center mt-4 px-4 py-2 border border-gray-400 rounded-xl shadow-2xl shadow-yellow-200">
                    Visit Site
                </button>
            </div>
        </div>
    );
};
