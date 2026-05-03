
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function ContD() {
  const user = useContext(UserContext);

  return <h2>Bye {user}</h2>;
}