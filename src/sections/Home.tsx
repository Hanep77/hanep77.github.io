import { FormEvent, useState } from "react";

export default function Home() {
  const [greet, setGreet] = useState<boolean>(false)
  const [inputs, setInputs] = useState<string[]>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLFormElement).input.value;
    (e.target as HTMLFormElement).input.value = ""

    if (inputs[inputs.length - 1] != "cat greet.txt") {
      setInputs(prev => [...prev, inputValue]);
    }

    if (inputValue == "cat greet.txt") {
      setGreet(true);
    }

    if (inputValue == "clear") {
      setGreet(false);
      setInputs([]);
    }
  }
  return (
    <section id="#" className="min-h-screen flex flex-col justify-center items-center">
      <div className="leading-tight text-center">
        <p className="mb-2">type <span className="text-blue-400 font-bold">cat greet.txt</span> in the terminal below</p>
        <p className="mb-2">type <span className="text-blue-400 font-bold">clear</span> to clear the terminal</p>
      </div>
      <div className="bg-zinc-800 border border-zinc-700 w-80 sm:w-[600px] rounded tracking-wide">
        <div className="py-1 border-b border-zinc-700 text-center flex justify-between">
          <div className="flex items-center gap-1 pe-2">
            <span className="inline-block w-3 h-3 rounded-full"></span>
            <span className="inline-block w-3 h-3 rounded-full"></span>
            <span className="inline-block w-3 h-3 rounded-full"></span>
          </div>
          <p>Terminal</p>
          <div className="flex items-center gap-1 pe-2">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>
        <label htmlFor="input" className="block p-1 h-96 overflow-y-auto">
          {inputs.map((input, index) => (
            <div key={index}>
              <div className="flex gap-1">
                <label><span className="text-green-300">hanep:</span><span className="text-blue-300">~</span>$ </label>
                <input type="text" className="flex-grow bg-transparent outline-none" autoFocus={true} disabled={true} defaultValue={input} />
              </div>
              {input != "cat greet.txt" && (
                <p>command wrong</p>
              )}
            </div>
          ))}
          <div className={`${!greet && "hidden"}`}>
            <p>hi!</p>
            <p>i'm Yudis Sutisna</p>
            <p>a passionate Web Developer with a love for coding,</p>
            <p>problem-solving, and building meaningful projects.</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex gap-1">
              <label><span className="text-green-300">hanep:</span><span className="text-blue-300">~</span>$ </label>
              <input type="text" id="input" name="input" className="flex-grow bg-transparent outline-none" autoFocus={true} autoCorrect="off" spellCheck="false" autoComplete="off" />
            </form>
          </div>
        </label>
      </div>
    </section >
  )
}
