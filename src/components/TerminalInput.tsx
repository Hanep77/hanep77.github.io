import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";

export type RulesType = {
  command: string,
  function: () => void
}

interface TerminalInputProps {
  handleSubmit: (e: FormEvent) => void,
  setRules: Dispatch<SetStateAction<RulesType[]>>,
  setInputs: Dispatch<SetStateAction<string[]>>,
  history: string[]
}

export default function TerminalInput({ handleSubmit, setRules, setInputs, history }: TerminalInputProps) {
  const [historyIndex, setHistoryIndex] = useState<number>(-1)

  useEffect(() => {
    // set terminal commands
    setRules([
      {
        command: "clear",
        function: () => {
          setInputs([]);
        }
      }
    ]);
  }, []);

  const handleKey = (e: React.KeyboardEvent) => {
    // handle ArrowUp key input
    if (e.key === "ArrowUp") {
      const currentHistoryIndex = historyIndex + 1;
      if (history[currentHistoryIndex]) {
        (e.target as HTMLInputElement).value = history[currentHistoryIndex]
      }
      historyIndex < history.length - 1 && setHistoryIndex(currentHistoryIndex);
      return
    }

    // handle ArowDown key input
    if (e.key === "ArrowDown") {
      const currentHistoryIndex = historyIndex - 1;
      (e.target as HTMLInputElement).value = history[currentHistoryIndex] ? history[currentHistoryIndex] : ""
      historyIndex >= 0 && setHistoryIndex(currentHistoryIndex);
      return
    }

    // handle Enter key input
    if (e.key === "Enter") {
      setHistoryIndex(-1)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-1">
        <label><span className="text-green-300">hanep:</span><span className="text-blue-300">~</span>$ </label>
        <input onKeyUp={handleKey} type="text" id="input" name="input" className="flex-grow bg-transparent outline-none"
          autoFocus={true} autoCorrect="off" spellCheck="false" autoComplete="off" autoCapitalize="off" />
      </form>
    </div>
  )
}
