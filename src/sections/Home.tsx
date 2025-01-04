import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <section id="#" className="min-h-screen m-auto max-w-screen-md flex flex-col justify-center items-center">
      {/* <div className="w-full mb-2 bg-green-300 bg-opacity-10 border border-green-900 rounded p-2"> */}
      {/*   <p>Note:</p> */}
      {/*   <ul className="list-disc ms-6"> */}
      {/*     <li><span className="text-green-500 font-bold">cat greet.txt</span> in the terminal below</li> */}
      {/*     <li><span className="text-green-500 font-bold">clear</span> to clear the terminal</li> */}
      {/*   </ul> */}
      {/* </div> */}
      <Terminal />
    </section >
  )
}
