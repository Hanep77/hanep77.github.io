import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <>
      <main className="text-zinc-100">
        <Home />
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-b border-zinc-700">
          <section className="min-h-screen max-w-screen-md m-auto px-4 2xl:pt-0 sm:px-0">
            <div className="max-w-screen-lg m-auto py-20">
              <div className="flex flex-col sm:flex-row gap-3">
                <Skills />
                <Contact />
              </div>
            </div>
          </section >
        </div>
        <Projects />
      </main>
    </>
  )
}
