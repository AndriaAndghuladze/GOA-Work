import { useState } from 'react'


export default  function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevCount => prevCount + 1)
  const discrement = () => setCount(prevCount => prevCount - 1)
  return (
   
      <div>
        <h1>{count}</h1>
        <button onClick={increment }>+1</button>
        <button onClick={discrement}>-1</button>
        
      </div>
     
  )
}


