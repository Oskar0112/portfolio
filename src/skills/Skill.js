import { ProgressBar } from "@components/ProgressBar";

export const Skill = (props) => {

    const { passdata } = props;

    const skills = passdata;

    return (
        <div className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
            {
                skills && skills.length > 0 &&
                skills.map((item, index) => (
                    <ProgressBar key={index} className="col-span-1 text-primary-900" skill={item} />
                ))
            }
        </div>
    );
};

