import { useState, useEffect } from 'react'


function App() {
    const[list, setList] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setList(json))
  },[])

  return (
    <>
      <ul>
        <li>{list.id}</li>
        <li>{list.title}</li>
      </ul>
        
    </>
  )
}

export default App
