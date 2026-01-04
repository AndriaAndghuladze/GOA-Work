

function LoginBasic() {
  return (
    <div className="mb-6">
      <h1 className="mb-2 bg-red-600 text-white text-center rounded-xl w-32">
        Basic
      </h1>
      <input className="border p-2 block mb-2" placeholder="Email" />
      <input className="border p-2 block mb-2" placeholder="Password" />
      <button className="bg-black text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}

function LoginCentered() {
  return (
    <div className="mb-6 border p-4 rounded-xl w-64">
      <h1 className="text-center mb-2">Centered</h1>
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <input className="border p-2 w-full mb-2" placeholder="Password" />
      <button className="bg-blue-600 text-white w-full py-2 rounded">
        Sign In
      </button>
    </div>
  );
}

function LoginHover() {
  return (
    <div className="mb-6">
      <h1 className="mb-2">Hover / Active</h1>
      <input className="border p-2 block mb-2" placeholder="Email" />
      <input className="border p-2 block mb-2" placeholder="Password" />
      <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500 active:bg-gray-300 duration-200">
        Login
      </button>
    </div>
  );
}

function LoginState() {
  const [email, setEmail] = useState("");

  return (
    <div className="mb-6">
      <h1 className="mb-2">useState</h1>
      <input
        className="border p-2 block mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="border p-2 block mb-2" placeholder="Password" />
      <button
        onClick={() => alert(email)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

function LoginReusable() {
  return (
    <div className="mb-6 border p-4 rounded-xl">
      <h1 className="mb-2">Reusable</h1>
      <input className="border p-2 block mb-2" placeholder="Email" />
      <input className="border p-2 block mb-2" placeholder="Password" />
      <button className="bg-purple-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <LoginBasic />
      <LoginCentered />
      <LoginHover />
      <LoginState />
      <LoginReusable />
    </div>
  );
}
