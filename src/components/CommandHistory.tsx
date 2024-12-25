export default function CommandHistory({ input }: { input: string }) {
  return (
    <div>
      <div className="flex gap-1">
        <label><span className="text-green-300">hanep:</span><span className="text-blue-300">~</span>$ </label>
        <input type="text" className="flex-grow bg-transparent outline-none" autoFocus={true} disabled={true} defaultValue={input} />
      </div>
      {input != "cat greet.txt" && (
        <p>command wrong</p>
      )}
      {input == "cat greet.txt" && (
        <>
          <p>hi!</p>
          <p>i'm Yudis Sutisna</p>
          <p>a passionate Web Developer with a love for coding,</p>
          <p>problem-solving, and building meaningful projects.</p>
        </>
      )}
    </div>
  )
}
