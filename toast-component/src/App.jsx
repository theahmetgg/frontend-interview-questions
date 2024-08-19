import "./App.css";

import useNotification from "./hooks/use-notification";

function App() {
  //custom hook -useNotification(position)

  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

  return (
    <div>
      <button
        onClick={() => {
          triggerNotification({
            type: "success",
            message: "File sent successfuly",
            duration: 3000,
          });
        }}
      >
        Trigger Success
      </button>
      <button
        onClick={() => {
          triggerNotification({
            type: "error",
            message: "File sent successfuly",
            duration: 3000,
          });
        }}
      >
        Trigger Error
      </button>
      {NotificationComponent}
    </div>
  );
}

export default App;
