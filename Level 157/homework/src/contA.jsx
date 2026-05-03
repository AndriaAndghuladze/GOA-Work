import { createContext, useState } from "react";
import ContB from "./contB";

export let UserCont = createContext();

export default function ContA() {
  const [user, setUser] = useState("Andria");

  return (
    <div>
      <h1>Component A</h1>

      <h3>{user}</h3>

      <UserCont.Provider value={user}>
        <ContB />
      </UserCont.Provider>
    </div>
  );
}