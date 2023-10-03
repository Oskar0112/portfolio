import { ContactForm } from "@components/Contact";
import { ToastContainer } from "react-toastify";

export const Contact = (props) => {

    const { passdata } = props;

    const contact = passdata;

    return (
        <div className="md:mx-24 mt-12">
            <ContactForm passdata={contact} />
            <ToastContainer style={{ marginTop:70 }}/>
        </div>
    );
};

