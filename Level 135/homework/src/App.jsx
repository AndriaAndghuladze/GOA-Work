import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "" 
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <input
        type="email"
        name="email"   // ➜ reuses same handler
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  );
}
