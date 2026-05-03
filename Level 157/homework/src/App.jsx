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

// props drilling -> React-ის პროცესი, სადაც რეკვიზიტები გადადის ჩადგმული კომპონენტების მრავალ ფენაში ღრმად ჩადგმულ შვილამდე მისასვლელად, მაშინაც კი, თუ შუალედურ კომპონენტებს მონაცემები არ სჭირდებათ.