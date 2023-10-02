import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { FaInfo } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

export const displayIcon = (type) => {
  switch (type) {
    case "success":
      return <FaCheck />;
    case "info":
      return <FaInfo />;
    case "error":
      return <FaExclamationCircle />;
    case "warning":
      return <FaExclamationTriangle />;
    default:
      return <FaBug />;
  }
};

const ToastMessage = ({ type, message }) =>
  toast[type](
    <div className="flex">
      <div className="flex-1 text-[16px] px-3 py-2 z-40">
        {message}
      </div>
    </div>
  );

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default ToastMessage;
