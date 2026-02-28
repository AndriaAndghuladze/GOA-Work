import { useState, useEffect, useEffectEvent } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [lastCount, setLastCount] = useState(0)

  const inc = () => setCount((count) => count + 1)

  const update = useEffectEvent(() =>{
    setLastCount(count - 1)
  }) 

  useEffect(() =>{
    update()
  })

  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>LastCount : {lastCount}</h2>
      <button onClick={inc}>+1</button>
    </div>
  )
}

export default App
