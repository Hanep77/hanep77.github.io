import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <section className="relative min-h-screen border-b border-zinc-700">
      <div className="area bg-zinc-900">
        <ul className="circles min-h-screen">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="absolute inset-0 m-auto max-w-screen-md flex flex-col justify-center items-center px-4 sm:px-0">
        <Terminal />
      </div>
    </section >
  )
}
