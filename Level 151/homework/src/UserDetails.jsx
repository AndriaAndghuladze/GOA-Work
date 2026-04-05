import { useParams } from "react-router-dom"

export default function UserDetails(){
        
    const {id} = useParams()

  return(
    <div>
        <h1>User Details</h1>

        <p>User {id}</p>

        

    </div>
  )
}