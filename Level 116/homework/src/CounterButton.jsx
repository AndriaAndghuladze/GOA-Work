import { useState } from "react";
import CounterButton from "./CounterButton";

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleCount() {
    setCounter(counter + 1);
    alert(`მიმდინარე მნიშვნელობა: ${counter + 1}`);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <CounterButton onCount={handleCount} />
    </div>
  );
}