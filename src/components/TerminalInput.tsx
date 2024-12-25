import { Dispatch, FormEvent, SetStateAction, useEffect } from "react";

export type RulesType = {
  command: string,
  function: () => void
}

interface TerminalInputProps {
  handleSubmit: (e: FormEvent) => void,
  setRules: Dispatch<SetStateAction<RulesType[]>>,
  setInputs: Dispatch<SetStateAction<string[]>>
}

export default function TerminalInput({ handleSubmit, setRules, setInputs }: TerminalInputProps) {
  useEffect(() => {
    setRules([
      {
        command: "clear",
        function: () => {
          setInputs([]);
        }
      }
    ]);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-1">
        <label><span className="text-green-300">hanep:</span><span className="text-blue-300">~</span>$ </label>
        <input type="text" id="input" name="input" className="flex-grow bg-transparent outline-none"
          autoFocus={true} autoCorrect="off" spellCheck="false" autoComplete="off" autoCapitalize="off" />
      </form>
    </div>
  )
}
