
export const RefCard = (props) => {

    const { passdata } = props;

    return (
        <div className="flex justify-center mt-16">
            <div className="relative bg-white w-[90%] rounded-2xl text-left p-5 border-slate-200 border-2 border-r-black-200 border-b-black-200">
                <div className="absolute w-24 h-24 -top-10 -left-10">
                    <img src={passdata.img} className=" w-full h-full rounded-full outline outline-offset-2 outline-2 outline-black-200 hover:cursor-pointer shadow shadow-white" />
                </div>
                <div className="text-slate-900 text-lg md:text-xl font-medium ml-12 p-1">
                    {passdata.name}
                </div>
                <div className="text-slate-900 text-lg md:text-xl ml-4 p-1">
                    {passdata.role}
                </div>
                <div className="text-slate-900 text-lg md:text-xl indent-4 p-1 first-letter:text-2xl first-letter:font-sans">
                    {passdata.recommend}
                </div>
            </div>
        </div>
    );
};