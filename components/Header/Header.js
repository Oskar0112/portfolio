import Link from "next/link";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import Image from 'next/image'

export const Header = (props) => {

    const { passdata } = props;

    const navigation = passdata;

    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50 border-b-2 border-slate-200"
        >
            <SectionContainer className="header--container wrap wrap-px">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/image/banner.png"
                                alt="logo"
                                className="h-12 w-auto"
                                height="128"
                                width="500"
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav passdata={navigation} />
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
