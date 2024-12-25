import Navbar from "./components/Navbar";
import Home from "./sections/Home";

export default function App() {
  return (
    <>
      <header className={`bg-zinc-900 border-b border-zinc-700 text-slate-100 fixed top-0 left-0 right-0 transition z-50`}>
        <Navbar />
      </header>
      <main className="bg-zinc-900 text-zinc-100">
        <Home />
      </main>
    </>
  )
}
