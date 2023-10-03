import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

export const SocialLinks = (props) => {

    const { passdata } = props;
    
    return (
        <div className="h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
            <a href={passdata.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    className="h-[30px] text-3xl text-grayscale-50 hover:text-sky-800 hover:scale-[1.1] transition-all duration-75"
                    icon={faGithub}
                />
            </a>
            <a href={passdata.skype} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    className="h-[30px] text-3xl text-grayscale-50 hover:text-sky-800 hover:scale-[1.1] transition-all duration-75"
                    icon={faSkype}
                />
            </a>
            {/* <a href={passdata.discord} target="_blank">
                <FontAwesomeIcon
                    className="h-[30px] text-3xl text-grayscale-50 hover:text-sky-800 hover:scale-[1.1] transition-all duration-75"
                    icon={faDiscord}
                />
            </a> */}
        </div>
    );
};