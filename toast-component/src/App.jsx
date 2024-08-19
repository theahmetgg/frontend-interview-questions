import "./App.css";
import Notification from "./components/notification";
import useNotification from "./hooks/use-notification";

function App() {
  //custom hook -useNotification(position)

  const {} = useNotification("top-right");

  return (
    <div>
      <button>Trigger Success</button>
    </div>
  );
}

export default App;
