import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <header className={`bg-zinc-900 border-b border-zinc-700 text-slate-100 fixed top-0 left-0 right-0 transition z-50`}>
        <Navbar />
      </header>
      <main className="bg-zinc-900 text-zinc-100">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}
