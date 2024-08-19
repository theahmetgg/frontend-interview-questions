import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import PropTypes from "prop-types";

import "./notification.css";

const icons = {
  success: <AiOutlineCheckCircle className="icon" />,
  info: <AiOutlineInfoCircle className="icon" />,
  warning: <AiOutlineWarning className="icon" />,
  error: <AiOutlineCloseCircle className="icon" />,
};

const Notification = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div className={`notification ${type}`}>
      {/* icon */}
      {icons[type]}
      {/* message */}
      {message}
      {/* close button */}
      <AiOutlineClose
        color="white"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
};

// PropTypes ile tip kontrolü
Notification.propTypes = {
  type: PropTypes.oneOf(["success", "info", "warning", "error"]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Notification;
