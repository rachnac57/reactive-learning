import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  function startTimer() {
    setStart(true);
  }

  function stopTimer() {
    setStart(false);
  }
  
  function resetTimer() {
    setCount(0);
    setStart(false);
  }

  const timer = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    let id;
    if (start) {
      id = setInterval(timer, 1000);
    } else {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count, start]);

  return (
    <>
      <strong>Count: </strong>
      {count}
      <br />
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => stopTimer()}>Pause</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </>
  );
}
