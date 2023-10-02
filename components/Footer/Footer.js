import { SectionContainer } from "@components/Section";
import Link from "next/link";
import { SocialLinks } from "@components/SocialLink";

export const Footer = (props) => {

    const { children } = props;
    
    const date = new Date();
    const year = date.getFullYear();
    const socialLinks = children;

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px flex justify-around items-center">
                    <div className="sm:w-[20%]">
                        <Link href="/">
                            <img
                                src="/image/banner.png"
                                alt="logo"
                                className="h-10 w-auto"
                                height="25"
                                width="100"
                            />
                        </Link>
                    </div>
                    <div className="sm:w-[40%]">
                        <SocialLinks children={socialLinks} />
                    </div>
                    <div className="sm:w-[20%]">
                        © {year} Oskar Molander.
                    </div>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
