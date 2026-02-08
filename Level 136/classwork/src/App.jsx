import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("რიცხვი შეიცვალა:", count)
  }, [count])

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
