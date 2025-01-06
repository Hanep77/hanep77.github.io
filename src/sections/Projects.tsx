import { FiExternalLink } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { SiGithub, SiJavascript, SiLaravel, SiMysql, SiPostgresql, SiPrisma, SiPusher, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen m-auto bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="max-w-screen-md m-auto py-20 px-4 2xl:pt-0 sm:px-0">
        <h2 className="text-2xl font-bold text-center mb-5">:<span className="text-blue-400">~</span><span className="text-green-400">$</span>Projects</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-zinc-800 border border-zinc-700 rounded overflow-hidden">
            <div>
              <img src="/img/nepchat.png" alt="nepchat" />
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">NepChat</h3>
                <div className="flex gap-2 text-xl">
                  <a href="https://github.com/hanep77/nepchat"><SiGithub /></a>
                  <a href="https://nepchats.vercel.app"><FiExternalLink /></a>
                </div>
              </div>
              <p className="text-zinc-400">NepChat is a real-time chat app that facilitates instant messaging</p>
              <div className="flex flex-wrap text-sm gap-2 mt-2">
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <RiNextjsFill className="text-lg" />
                  <span>NextJS</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiPusher className="text-lg" />
                  <span>Pusher</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiPostgresql className="text-lg" />
                  <span>Postgresql</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiPrisma className="text-lg" />
                  <span>Prisma</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiTailwindcss className="text-lg" />
                  <span>TailwindCSS</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiTypescript className="text-lg" />
                  <span>Typescript</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 border border-zinc-700 rounded overflow-hidden">
            <div>
              <img src="/img/neptype.png" alt="neptype" />
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">NepType</h3>
                <div className="flex gap-2 text-xl">
                  <a href="https://github.com/hanep77/neptype"><SiGithub /></a>
                  <a href="https://neptype.vercel.app"><FiExternalLink /></a>
                </div>
              </div>
              <p className="text-zinc-400">I often use typing test web like 10fastfingers and monkeytype. so I tried to make my own</p>
              <div className="flex flex-wrap text-sm gap-2 mt-2">
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiReact className="text-lg" />
                  <span>ReactJS</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiTailwindcss className="text-lg" />
                  <span>TailwindCSS</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiTypescript className="text-lg" />
                  <span>Typescript</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 border border-zinc-700 rounded overflow-hidden">
            <div>
              <img src="/img/neptweet.png" alt="neptweet" />
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">NepTweet</h3>
                <div className="flex gap-2 text-xl">
                  <a href="https://github.com/hanep77/neptweet-frontend"><SiGithub /></a>
                </div>
              </div>
              <p className="text-zinc-400">A social app to share whatever, whenever</p>
              <div className="flex flex-wrap text-sm gap-2 mt-2">
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiReact className="text-lg" />
                  <span>ReactJS</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiJavascript className="text-lg" />
                  <span>Javascript</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiLaravel className="text-lg" />
                  <span>Laravel</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiTailwindcss className="text-lg" />
                  <span>TailwindCSS</span>
                </div>
                <div className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                  <SiMysql className="text-lg" />
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
