import { useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false)

  function handleSidebar() {
    setSidebar(!sidebar)
  }

  return (
    <nav className="h-16 flex justify-between items-center max-w-screen-md mx-auto px-4 md:px-0">
      <div>
        <h1 className="text-2xl font-bold">Hanep</h1>
      </div>
      <div className={`bg-zinc-900 fixed md:static z-30 mt-16 top-0 left-0 bottom-0 right-0 md:mt-0 ${!sidebar && 'translate-x-full'} transition md:translate-x-0 flex`}>
        <ul className="flex flex-col md:flex-row items-center gap-5 text-lg font-medium px-4 md:px-0 bg-red w-full">
          <li className="w-full md:w-auto text-center md:text-start">
            <a href="#" className="hover:text-green-500 block md:inline w-full border-b md:border-none border-zinc-700 p-4 md:p-0" onClick={handleSidebar}>Home</a>
          </li>
          <li className="w-full md:w-auto text-center md:text-start">
            <a href="#about" className="hover:text-green-500 block md:inline w-full border-b md:border-none border-zinc-700 p-4 md:p-0" onClick={handleSidebar}>About</a>
          </li>
          <li className="w-full md:w-auto text-center md:text-start">
            <a href="#skills" className="hover:text-green-500 block md:inline w-full border-b md:border-none border-zinc-700 p-4 md:p-0" onClick={handleSidebar}>Skills</a>
          </li>
          <li className="w-full md:w-auto text-center md:text-start">
            <a href="#projects" className="hover:text-green-500 block md:inline w-full border-b md:border-none border-zinc-700 p-4 md:p-0" onClick={handleSidebar}>Projects</a>
          </li>
        </ul>
      </div>
      <div className="flex md:hidden gap-4">
        <button className={`flex flex-col gap-[6px] ${sidebar && 'translate-y-1'}`} onClick={handleSidebar}>
          <div className={`w-8 h-[3px] bg-zinc-100 rounded ${sidebar && 'translate-y-[4.7px] rotate-45'} transition`}></div>
          <div className={`w-8 h-[3px] bg-zinc-100 rounded ${sidebar && 'hidden'} transition`}></div>
          <div className={`w-8 h-[3px] bg-zinc-100 rounded ${sidebar && '-translate-y-[4.7px] -rotate-45'} transition`}></div>
        </button>
      </div>
    </nav>
  )
}
