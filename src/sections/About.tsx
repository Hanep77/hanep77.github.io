import { BsGithub, BsInstagram } from "react-icons/bs";

export default function About() {
  const ascii = String.raw`
       ___________
      |.---------.|
      ||         ||
      ||         ||
      ||         ||
      |'---------'|
       ')__ ____('
       [=== -- o ]--.
     __'---------'__ \
    [::::::::::: :::] )
     ---------------/T\
                    \_/
        `;
  return (
    <section id="about" className="min-h-screen max-w-screen-full m-auto bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="max-w-screen-md m-auto pt-20 px-4 2xl:pt-0 sm:px-0">
        <h2 className="text-2xl font-bold text-center mb-5">:<span className="text-blue-400">~</span><span className="text-green-400">$</span>About</h2>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="sm:w-2/3">
            <p className="text-justify">I discovered my passion for programming while I was searching for a suitable major to me when I was about to enter vocational school, then I found software engineering, and since then, I have been learn programming, particularly web programming. What makes me like programming besides being fun to do, is that it can also be use to solve problems.</p>
            <div className="mt-5 border border-blue-400 p-2 rounded">
              <h5 className="text-lg font-bold text-green-400">You can follow me on:</h5>
              <a href="https://instagram.com/hanep77" className="flex items-center gap-2"><BsInstagram />@hanep77</a>
              <a href="https://github.com/hanep77" className="flex items-center gap-2"><BsGithub />hanep77</a>
            </div>
          </div>
          <pre className="sm:w-1/3">
            {ascii}
          </pre>
        </div>
      </div>
    </section>
  )
}
