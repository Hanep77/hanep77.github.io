import { RiNextjsFill } from "react-icons/ri";
import { SiCss3, SiHtml5, SiJavascript, SiLaravel, SiPhp, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen max-w-screen-md m-auto px-4 2xl:pt-0 sm:px-0">
      <div className="max-w-screen-lg m-auto py-20">
        <h2 className="text-2xl font-bold text-center mb-5">:<span className="text-blue-400">~</span><span className="text-green-400">$</span>Skills</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="sm:w-3/5 border p-2 text-sm sm:text-base rounded border-zinc-700 bg-zinc-800">
            <p className="border-b border-zinc-700 text-center pb-2 mb-2">skills.json</p>
            <p>&nbsp;<span className="text-zinc-400">1</span> {"{"}</p>
            <p>&nbsp;<span className="text-zinc-400">2</span> &nbsp;&nbsp;<span className="text-blue-400">"tech_stack"</span>: {"{"}</p>
            <p>&nbsp;<span className="text-zinc-400">3</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"languages"</span>: [</p>
            <p>&nbsp;<span className="text-zinc-400">4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Javascript"</span>,</p>
            <p>&nbsp;<span className="text-zinc-400">5</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"typescript"</span>,</p>
            <p>&nbsp;<span className="text-zinc-400">6</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"PHP"</span>,</p>
            <p>&nbsp;<span className="text-zinc-400">7</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"HTML"</span>,</p>
            <p>&nbsp;<span className="text-zinc-400">8</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"CSS"</span>,</p>
            <p>&nbsp;<span className="text-zinc-400">9</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"SQL"</span></p>
            <p><span className="text-zinc-400">10</span> &nbsp;&nbsp;&nbsp;&nbsp;],</p>
            <p><span className="text-zinc-400">11</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"frameworks_and_libraries"</span>: [</p>
            <p><span className="text-zinc-400">12</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"ReactJS"</span>,</p>
            <p><span className="text-zinc-400">13</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"NextJS"</span>,</p>
            <p><span className="text-zinc-400">14</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Laravel"</span>,</p>
            <p><span className="text-zinc-400">15</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"TailwindCSS"</span>,</p>
            <p><span className="text-zinc-400">16</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"prisma"</span></p>
            <p><span className="text-zinc-400">17</span> &nbsp;&nbsp;&nbsp;&nbsp;],</p>
            <p><span className="text-zinc-400">18</span> &nbsp;&nbsp;{"}"}</p>
            <p><span className="text-zinc-400">19</span> {"}"}</p>
          </div>
          <div className="sm:w-2/5">
            <div className="text-5xl grid grid-cols-4 gap-3">
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiJavascript />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiTypescript />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiPhp />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiHtml5 />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiCss3 />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <TbSql />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiReact />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <RiNextjsFill />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiLaravel />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiTailwindcss />
              </div>
              <div className="border border-zinc-700 p-2 rounded bg-zinc-800 flex justify-center">
                <SiPrisma />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
