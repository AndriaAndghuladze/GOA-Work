import { useState } from "react";
import { UserContext } from "./UserContext";
import ContA from "./contA";

export default function App() {
  const [user, setUser] = useState("Andria");

  return (
    <UserContext.Provider value={user}>
      <ContA />
    </UserContext.Provider>
  );
}