import { FormEvent, useState } from "react";
import CommandHistory from "./CommandHistory";
import TerminalInput, { RulesType } from "./TerminalInput";

export default function Terminal() {
  const [inputs, setInputs] = useState<string[]>(["cat greet.txt"])
  const [rules, setRules] = useState<RulesType[]>([])
  const [history, setHistory] = useState<string[]>(["cat greet.txt"])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const inputValue = (e.target as HTMLFormElement).input.value;
    (e.target as HTMLFormElement).input.value = ""

    setInputs(prev => [...prev, inputValue]);
    setHistory(prev => [inputValue, ...prev]);
    rules.map(rule => {
      if (inputValue == rule.command) {
        rule.function();
      }
    })
  }

  return (
    <div className="bg-zinc-800 border border-zinc-700 w-80 sm:w-[600px] rounded tracking-wide">
      {/* header */}
      <div className="py-1 border-b border-zinc-700 text-center flex justify-center items-center relative">
        <p>Terminal</p>
        <div className="flex items-center gap-1 absolute right-2">
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>
      {/* body */}
      <label htmlFor="input" className="block p-1 h-96 overflow-y-auto">
        {inputs.map((input, index) => (
          <CommandHistory key={index} input={input} />
        ))}
        <TerminalInput
          handleSubmit={(e: FormEvent) => handleSubmit(e)}
          setRules={setRules}
          setInputs={setInputs}
          history={history}
        />
      </label>
    </div>
  )
}
