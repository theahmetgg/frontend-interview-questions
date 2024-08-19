import { useState } from "react";
import Notification from "../components/notification";

const useNotification = (position = "top-right") => {

  const [notification, setNotification] = useState(null);

  const triggerNotification=(notificationProps)=>{
    setNotification(notificationProps)
setTimeout(() => {
setNotification(null)
}, notificationProps.duration);
}

  const NotificationComponents=notification?(
    <div>
        <Notification {...notification}/>
        </div>
  )
};
export default useNotification;
