import { useState } from "react";
import Count from "./assets/Count";

export default function Display() {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dsc = () => setCount(count - 1);

  return (
    <div>
      <h1>count:{count}</h1>
      <Count inc={inc} dsc={dsc} />
    </div>
  );
}