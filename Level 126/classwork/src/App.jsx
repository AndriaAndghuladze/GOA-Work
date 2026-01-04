export default function App(){
  return (
    <div>
      <form action="">
        <h1 className="w-30 h-7 bg-red-600 text-center rounded-2xl">Login</h1>
        <input type="text"  placeholder="Enter Email" className="border-black has-[40px]:"/>
        <br />
        <input type="password" placeholder="Enter password" className="border-black has-[40px]:"/>
        <br />
        <button className="bg-black text-white w-50 h-15 rounded-2xl focus:outline-2 hover:bg-gray-500 duration-75 active:bg-gray-300">Click Me to LogIn</button>
      </form>
    </div>
  )
}