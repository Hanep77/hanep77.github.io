import { BsGithub, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="mx-auto w-full max-w-screen-md px-4 md:px-0 py-6 lg:py-8">
        <div className="flex justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-slate-100">Hanep</h1>
          </div>
          <div className="flex gap-4">
            <ul>
              <li><a href="https://instagram.com/hanep77" className="flex items-center gap-1 hover:text-zinc-200"><BsInstagram />@hanep77</a></li>
              <li><a href="https://github.com/hanep77" className="flex items-center gap-1 hover:text-zinc-200"><BsGithub />hanep77</a></li>
              <li><a href="yudishan@gmail.com" className="flex items-center gap-1 hover:text-zinc-200"><MdEmail />yudishan@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-zinc-700" />
        <span className="text-sm">©2025 Hanep</span>
      </div>
    </footer>
  )
}
