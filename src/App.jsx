import { useEffect, useState, useContext, useRef } from "react";
import "./App.css";
import ApplemanContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const applemanInfo = useContext(ApplemanContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{applemanInfo.name}</p>
      <p>{applemanInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
    </div>
  );
}

export default App;
