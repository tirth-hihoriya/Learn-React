import './App.css';
import { useToggle } from "./components/useToggle";

function App() {
  const [isVisible, toggle] = useToggle(false);
  const [isVisible2, toggle2] = useToggle(false);

  return (
    <div className="App">
      <button onClick={toggle}>
      {isVisible? "Hide" : "Show"}
      </button>
      {isVisible && <h1> Hidden Text1</h1>}

      <button onClick={toggle2}>
      {isVisible2? "Hide2" : "Show2"}
      </button>
      {isVisible2 && <h1> Hidden Text2</h1>}
    </div>
  );
}

export default App;
