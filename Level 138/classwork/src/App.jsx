import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {setTime(prev => prev + 1)}, 1000)

    
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>Time: {time}</h1>
    </div>
  );
}


