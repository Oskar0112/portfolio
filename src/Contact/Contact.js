import { ContactForm } from "@components/Contact";
import { ToastContainer } from "react-toastify";

export const Contact = (props) => {

    const  {children} = props;

    const contact = children;

    return (
        <div className="md:mx-24 mt-12">
            <ContactForm children={contact} />
            <ToastContainer style={{ marginTop:70 }}/>
        </div>
    );
};

