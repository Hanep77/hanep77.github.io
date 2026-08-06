import { IoLink, IoLogoGithub } from "react-icons/io5";

const projects = [
  {
    name: "Safar, System for Accessible Friendly & Halal Travel Routes",
    image: "img/safar.png",
    description: "an integrated web platform that provides a location-based (hyperlocal) halal tourism directory",
    links: {
      website: "https://safar.unsil.ac.id"
    },
    techStack: [
      "next.js",
      "TailwindCSS",
      "Postgresql",
      "Prisma",
    ]
  },
  {
    name: "Wastelens",
    image: "img/wastelens.png",
    description: "A waste management platform that connects citizens, environmental agencies, and field officers.",
    links: {
      website: "https://wastelens-green.up.railway.app"
    },
    techStack: [
      "next.js",
      "TailwindCSS",
      "Postgresql",
      "Prisma",
    ]
  },
  {
    name: "BarberBrody",
    image: "img/BarberBrody.png",
    description: "A barbershop reservation system",
    links: {
      github: "https://github.com/hanep77/barbershop"
    },
    techStack: [
      "laravel",
      "ReactJS",
      "TypeScript",
      "TailwindCSS"
    ]
  },
  {
    name: "Kobama Event",
    image: "img/kobama.png",
    description: "An event ticketing platform",
    links: {
      website: "https://kobamaevent.com"
    },
    techStack: [
      "Laravel",
      "ReactJS",
      "TailwindCSS"
    ]
  },
  {
    name: "Nepolia",
    image: "img/nepolia.png",
    description: "A Social network",
    links: {
      github: "https://github.com/hanep77/nepolia",
      website: "https://nepolia.vercel.app"
    },
    techStack: [
      "NextJS",
      "TailwindCSS"
    ]
  },
  // {
  //   name: "PSA Card Submission",
  //   image: "img/p-4.png",
  //   description: "PSA Card Submission",
  //   links: {
  //   },
  //   techStack: [
  //     "Laravel"
  //   ]
  // },
  {
    name: "Psychoolab",
    image: "img/psychoolab.png",
    description: "A consulting web app",
    links: {
      website: "https://psychoolab.com"
    },
    techStack: [
      "Laravel",
      "PHP",
      "Bootstrap"
    ]
  },
  {
    name: "NepType",
    image: "img/neptype.png",
    description: "Typing test website",
    links: {
      website: "https://neptype.vercel.app",
      github: "https://github.com/hanep77/neptype"
    },
    techStack: [
      "ReactJS",
      "TypeScript",
      "TailwindCSS"
    ]
  },
  {
    name: "HPP Calculator",
    image: "img/p-3.png",
    description: "A web application designed to help businesses calculate Cost of Goods Sold",
    links: {
      github: "https://github.com/hanep77/hpp-calculator"
    },
    techStack: [
      "Laravel",
      "ReactJS",
      "TailwindCSS"
    ]
  },
  {
    name: "Point of Sales",
    image: "img/p-8.png",
    description: "A system to help your business",
    links: {
      "github": "https://github.com/Hanep77/pos-fe"
    },
    techStack: [
      "ReactJS",
      "TailwindCSS"
    ]
  },
  {
    name: "The Quiz",
    image: "img/p-9.png",
    description: "quiz web app",
    links: {
      "github": "https://github.com/Hanep77/the-quiz"
    },
    techStack: [
      "ReactJS",
      "TailwindCSS",
      "Laravel"
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen m-auto bg-zinc-900">
      <div className="max-w-screen-md m-auto py-20 px-4 2xl:pt-0 sm:px-0">
        <h2 className="text-2xl font-bold text-center mb-5">
          :<span className="text-blue-400">~</span><span className="text-green-400">$</span>Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map(project =>
            <div key={project.image} className="bg-zinc-800 border border-zinc-700 rounded overflow-hidden">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full" />
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <div className="flex gap-2 text-xl">
                    {project.links.github && <a target="_blank" href={project.links.github}><IoLogoGithub /></a>}
                    {project.links.website && <a target="_blank" href={project.links.website}><IoLink /></a>}
                  </div>
                </div>
                <p className="text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap text-sm gap-2 mt-2">
                  {project.techStack.map(tech =>
                    <div key={tech} className="flex items-center h-8 px-2 bg-blue-400 bg-opacity-15 rounded-full gap-1">
                      <span>{tech}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
