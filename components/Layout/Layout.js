import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import {
    navigation,
    socialLinks
} from "Database/Database";

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${className && className
                }`}
        >
            <Header passdata={navigation} />
            {children}
            <Footer passdata={socialLinks} />
        </main>
    );
};
