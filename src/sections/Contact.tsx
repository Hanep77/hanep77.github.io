import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const contacts = [
  {
    url: "https://github.com/hanep77",
    name: "hanep77",
    social: "github",
    icon: IoLogoGithub
  },
  {
    url: "https://instagram.com/hanep77",
    name: "hanep77",
    social: "instagram",
    icon: IoLogoInstagram
  },
  {
    url: "https://linkedin.com/in/yudis-sutisna",
    name: "Yudis Sutisna",
    social: "linkedin",
    icon: IoLogoLinkedin
  },
  {
    url: "mailto:yudishan26@gmail.com",
    name: "yudishan26@gmail.com",
    social: "Email",
    icon: IoMailOutline
  }
]

export default function Contact() {
  return (
    <div className="sm:w-1/2 space-y-4 border-t border-transparent">
      <h4 className="font-bold border-b border-zinc-700 text-center py-2">Contact</h4>
      {contacts.map(contact =>
        <div className="border p-2 text-sm sm:text-base rounded border-zinc-700 bg-zinc-800 flex items-center gap-4">
          <div>
            <contact.icon className="text-3xl" />
          </div>
          <div>
            <p className="text-xs text-zinc-400">{contact.social}</p>
            <p>{contact.name}</p>
          </div>
        </div>
      )}
    </div>
  )
}
