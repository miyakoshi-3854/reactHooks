import { useEffect, useState, useContext, useRef, useReducer } from "react"; // 関数をReactライブラリからインポート
import "./App.css";
import ApplemanContext from "./main"; // main.jsxからコンテンツをインポート

// useReducerを定義する
const reducer = (state, action) => {
  switch (
    action.type // アクションオブジェクトを定義
  ) {
    case "increment": // 増加
      return state + 1;
    case "decrement": // 減少
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0); // useStateを宣言
  const applemanInfo = useContext(ApplemanContext); // インポートされたコンテキストの値を受け取る
  const ref = useRef(); // useRefを宣言
  const [state, dispatch] = useReducer(reducer, 0); // useReducerを宣言

  const handleClick = () => {
    setCount(count + 1);
  };

  // useEffectを宣言
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

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default App;
