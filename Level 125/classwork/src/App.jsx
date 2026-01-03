import mt from "./assets/photo.png";

export default function App(){
  return (
    <div>
      <img src={mt} alt="mt" className="w-3/4 sm:w-1/2 lg:w-1/4" />

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Thise is mountine</h1>

        <button className="bg-black text-white  md: w-48 rounded-20 ">
          Click Me
        </button>
    </div>
  )
}