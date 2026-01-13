export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form>
        <div className="h-[250px] w-[200px] bg-gray-500 border border-black flex flex-col items-center justify-center gap-4 rounded-xl">

          <h1 className="text-2xl font-bold text-center">Login</h1>

          <input
            type="text"
            placeholder="Email"
            className="px-4 py-2 w-3/4 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 w-3/4 rounded"
          />

          <button className="bg-white text-black px-6 py-2 border border-black rounded hover:bg-gray-200">
            Click Me
          </button>

        </div>
      </form>
    </div>
  )
}
