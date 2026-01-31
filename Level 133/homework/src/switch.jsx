import { useState } from 'react'

export default function App() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOn(true)}>ON</button>
      <button onClick={() => setIsOn(false)}>OFF</button>

      <h1>{isOn}</h1>
    </div>
  )
}
