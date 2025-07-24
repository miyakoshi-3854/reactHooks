import {
  useEffect,
  useState,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react"; // 関数をReactライブラリからインポート
import "./App.css";
import ApplemanContext from "./main"; // main.jsxからコンテンツをインポート
import SomeChild from "./SomeChild";

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
    // setCount(count + 1);
  };

  // useEffectを宣言
  useEffect(() => {
    console.log("Hello Hooks");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  // useMemoに使うuseState
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while (i < 20000000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  // useMemoによってメモ化された関数
  const square = useMemo(() => {
    let i = 0;
    while (i < 20000) {
      i++;
    }
    return count02 * count02;
  }, [count02]);

  // useCallBack 関数のメモ化
  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert(`これは重い処理です。`);
  // };

  const showCount = useCallback(() => {
    alert(`これは重い処理です。`);
  }, [counter]);

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

      <hr />
      <h1>useMemo</h1>
      <div>カウント：１{count01}</div>
      <div>カウント：２{count02}</div>
      <div>結果{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>

      <hr />
      <h1>useCallBack</h1>
      <SomeChild showCount={showCount} />
    </div>
  );
}

export default App;
z;
