import { useState } from "react"



export default function App(){
  const [count, setCount] = useState(0)


  const up = () =>{
      setCount(count + 1)     
  }

  const down = () =>{
      setCount(count - 1)    
  }

  const zero = () =>{
      setCount(count * 0)
  }

  return (
    <div>

      <h1>{count}</h1>
      
      <button onClick={up}>UP</button>
      <br />
      <button onClick={down}>Down</button>
      <br />
      <button onClick={zero}>0</button>

    </div>
  )
}