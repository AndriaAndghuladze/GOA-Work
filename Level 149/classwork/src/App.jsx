import { useState, useEffect } from 'react'

import './App.css'

export default function App(){
    

    const[list, setList] = useState([])

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setList(json))
  },[])
  
  return(
    <div>
        <h1 style={{color: 'white', fontFamily: 'cursive', margin: 10, padding:20, width: 110, height: 80, background: 'black', textAlign: 'center'}}>Hello World</h1>

        <h1>User:
          <ul>
            <li>{list.id}</li>
            <li>{list.title}</li>
          </ul>
        </h1>
    </div>
  )
}