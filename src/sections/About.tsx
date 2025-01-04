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
    <section id="about" className="min-h-screen max-w-screen-md m-auto">
      <div className="max-w-screen-lg m-auto pt-20">
        <h2 className="text-2xl font-bold text-center mb-5">:<span className="text-blue-400">~</span><span className="text-green-400">$</span>About</h2>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="sm:w-2/3">
            <p>I discovered my passion for programming while I was searching for a suitable major to me when I was about to enter vocational school, then I found software engineering, and since then, I have been learn programming, particularly web programming. What makes me like programming besides being fun to do, is that it can also be use to solve problems.</p>
          </div>
          <pre className="sm:w-1/3">
            {ascii}
          </pre>
        </div>
      </div>
    </section>
  )
}
