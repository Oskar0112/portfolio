import "@styles/globals.scss";
import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}