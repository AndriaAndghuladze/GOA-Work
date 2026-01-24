export default function ProfileCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-[350px] bg-[#1f1f1f] rounded-xl p-8 text-center shadow-lg">
        
        

        
        <h1 className="text-white text-2xl font-semibold">
          Jessica Randall
        </h1>

        
        <p className="text-green-400 text-sm font-medium mt-1">
          London, United Kingdom
        </p>

        
        <p className="text-gray-300 text-sm mt-4 mb-6">
          “Front-end developer and avid reader.”
        </p>

        
        <div className="space-y-3">
          <button className="w-full bg-[#333333] text-white py-3 rounded-lg font-medium hover:bg-green-400 hover:text-black transition">
            GitHub
          </button>
          <button className="w-full bg-[#333333] text-white py-3 rounded-lg font-medium hover:bg-green-400 hover:text-black transition">
            Frontend Mentor
          </button>
          <button className="w-full bg-[#333333] text-white py-3 rounded-lg font-medium hover:bg-green-400 hover:text-black transition">
            LinkedIn
          </button>
          <button className="w-full bg-[#333333] text-white py-3 rounded-lg font-medium hover:bg-green-400 hover:text-black transition">
            Twitter
          </button>
          <button className="w-full bg-[#333333] text-white py-3 rounded-lg font-medium hover:bg-green-400 hover:text-black transition">
            Instagram
          </button>
        </div>

      </div>
    </div>
  );
}
