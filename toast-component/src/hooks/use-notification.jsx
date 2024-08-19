import { useCallback, useState, useRef } from "react";
import Notification from "../components/notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);
  const timerRef = useRef(null);

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timerRef.current);
    setNotification(notificationProps);

    timerRef.current = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
