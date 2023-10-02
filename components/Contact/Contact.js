import React, { useRef, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "emailjs-com";
import toast from '@components/Contact/Toast';

export const ContactForm = (props) => {

  const { passdata } = props;

  const ServiceId = passdata.ServiceId;
  const TemplateId = passdata.TemplateId;
  const PublicKey = passdata.PublicKey;

  const form = useRef();

  const [isAle, setIsAle] = useState(true);

  useEffect(() => {
    emailjs.init(PublicKey);
  }, []);

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);


  const sendEmail = (e) => {

    e.preventDefault();

    if (isAle) {
      setIsAle(false);

      emailjs
        .sendForm(
          ServiceId,
          TemplateId,
          e.target,
          PublicKey
        )
        .then(
          (result) => {
            setIsAle(true);
            notify("success", "Success!")
          },
          (error) => {
            setIsAle(true);
            notify("error", "Error!")
          }
        );
    }
    
  };
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-t from-orange-50 rounded-xl w-[100%] md:w-[80%] border-white-200 border-2 shadow-lg shadow-orange-50 " >
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-3xl p-4  text-grayscale-200 text-center border-b-2 border-gray-200 rounded-b-[0%] shadow-md"
        >
          <Typewriter words={["Let's get in touch!"]} loop={true} />
          &nbsp;
        </h2>
        <div className="w-full flex justify-center">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center w-[80%] h-full pt-2 text-grayscale-200">
            <label className="text-xl mb-2">Your Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your Name"
              className="p-[0.5em] pl-4 rounded-xl"
              required
            />
            <br />
            <label className="text-xl mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              className="p-[0.5em] pl-4 rounded-xl"
              required
            />
            <br />
            <label className="text-xl mb-2">Message</label>
            <textarea
              rows="8"
              className="p-[0.5em] pl-4 rounded-xl text-grayscale-950 shadow-sm shadow-yellow-50"
              placeholder="Enter your message..."
              name="message"
              required
            />
            <br />
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-white hover:bg-gray-100 text-gray-800 font-bold item-center w-[80%] md:w-[40%] mb-8 py-3 border border-gray-400 rounded-xl shadow-2xl shadow-yellow-100 ${isAle ? '' : 'disable'} `}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};