import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const [num, setNum] = useState(1);

  function add() {
    setNum(num + 1);
  }
  function minus() {
    setNum(num - 1);
  }
  function zero() {
    setNum(0);
  }
  return (
    <>
      <div>
        <Home />
        <h1>{num}</h1>
        <button onClick={add} disabled={num === 20 ? true : false}>
          Increment
        </button>
        <button onClick={zero}>Reset</button>
        <button onClick={minus} disabled={num === 0 ? true : false}>
          Decrement
        </button>
        {num === 20 && <p>Maximum quantity reached!</p>}
        {num === 0 && <p>No Nagitive Value!</p>}
      </div>
    </>
  );
}
export default App;
