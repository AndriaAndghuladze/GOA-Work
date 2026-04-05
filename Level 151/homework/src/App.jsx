import { Routes, Route } from "react-router-dom"
import User from "./User"
import UserDetails from "./UserDetails"


export default function App(){
  return(
    <div>

      <Routes>

        <Route path="/Users" element={User}/>
        <Route path="/Users/:id" element={UserDetails}/>
      
      </Routes>
    </div>
  )
}
