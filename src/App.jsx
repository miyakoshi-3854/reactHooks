import { useEffect, useState, useContext } from "react";
import "./App.css";
import ApplemanContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const applemanInfo = useContext(ApplemanContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{applemanInfo.name}</p>
      <p>{applemanInfo.age}</p>
    </div>
  );
}

export default App;
