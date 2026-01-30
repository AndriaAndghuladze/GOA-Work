// კაუჭი არის რეაქტის მეთოდი
//კაუჭის შექმნა ამარტივებს კოდის წერას
//კაუჭს ვიყიყენებთ ფუნქციებთან

import { useState } from "react";

const [count, setCount] = useState(0)

export default function App(){
  return(
    <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Minuse</button>
        <h1>{count}</h1>

        
    </div>
  )
}


