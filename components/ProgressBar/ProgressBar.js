import { BallCanvas } from "@components/Ball";

export const ProgressBar = (props) => {

    const { skill } = props;

    return (
        <div className="relative">
            <div className="flex flex-row mb-2">
                <div className=" w-14 h-14 items-center justify-center">
                    <BallCanvas icon={`/skills/${skill[0]}.png`} />
                </div>
                <div className="w-full">
                    <div className="flex flex-row mb-1 ml-2">
                        <div className=" text-lg font-medium text-slate-900 justify-center">{skill[0]}</div>
                    </div>
                    <div className="rounded-full border border-blue-500 p-[2px]">
                        <div
                            className="flex items-center justify-center h-2.5 rounded-full bg-blue-500 text-xs leading-none"
                            style={{ width: `${skill[1]}%` }}
                        >
                            <span className="p-1 text-white">{skill[1]}%</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};