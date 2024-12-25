import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <section id="#" className="min-h-screen flex flex-col justify-center items-center">
      <Terminal />
      <div className="w-80 sm:w-[600px] mt-4 bg-green-300 bg-opacity-10 border border-green-900 rounded p-2">
        <p>Note:</p>
        <ul className="list-disc ms-6">
          <li className=""><span className="text-blue-400 font-bold">cat greet.txt</span> in the terminal below</li>
          <li className=""><span className="text-blue-400 font-bold">clear</span> to clear the terminal</li>
        </ul>
      </div>
    </section >
  )
}
