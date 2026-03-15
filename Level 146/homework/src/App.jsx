import { useState } from "react"

export default function App(){

  const[name, setName] = useState(' ')
  const[LastName, setLastName] = useState(' ')
  const[code, setCode] = useState(' ')
  const[email, setEmail] = useState(' ')
  const[password, setPassword] = useState(' ')

    const Name = e => setName 
      (e.target.value)

    const Lastname = e => setLastName 
    (e.target.value)

    const Code = e => setCode
    (e.target.value)

    const emaiL = e => setEmail
    (e.target.value)

    const Password = e => setPassword 
    (e.target.value)
  


  return(
    <div>

      <input type="text" name="" id="" onChange={Name} value={name}/>
      <input type="text" name="" id="" onChange={Lastname} value={LastName}/>
      <input type="text" name="" id="" onChange={Code} value={code}/>
      <input type="email" name="" id="" onChange={emaiL} value={email}/>
      <input type="password" name="" id="" onChange={Password} value={password}/>


      <h1>{name}</h1>
      <h1>{LastName}</h1>
      <h1>{code}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>



    </div>
  )
}