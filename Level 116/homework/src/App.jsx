import { useState } from "react";

export default function CounterButton({ onCount }) {
  return (
    <button onClick={onCount}>
      Count +
    </button>
  );
}