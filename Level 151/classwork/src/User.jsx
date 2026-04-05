import { Link } from "react-router-dom"

export default function User(){
        const Users = [
            {id:1, name:'Name 1'},
            {id:2, name:'Name 2'},
            {id:1, name:'Name 3'}
        ]



  return(
    <div>
        <h1>User:</h1>

        
        {Users.map(User => {
            <div key={User.id}>
                <Link to={`/Users/${User.id}`}  />
            </div>
        })}
    </div>
  )
}