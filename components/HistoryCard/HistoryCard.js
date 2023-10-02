
export const HistoryCard = (props) => {

    const { children } = props;

    const visit = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="relative rounded-xl text-center p-5 hover:bg-slate-50">
            <div className="absolute w-24 h-24 hidden xl:block">
                <img src={ children.mark } className=" w-full h-full shadow-md shadow-orange-50 hover:cursor-pointer" onClick={ () => visit(children.site) }/>
            </div>
            <div className=" font-bold text-slate-900 p-5 text-lg md:text-xl underline decoration-sky-500 hover:cursor-pointer" onClick={ () => visit(children.site) }>
                {children.title}
            </div>
            <h6 className="text-lg md:text-xl">{ children.degree }</h6>
            <h6 className="text-lg md:text-xl">{ children.history }</h6>
        </div>
    );
};