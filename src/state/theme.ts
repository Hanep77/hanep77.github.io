import { createContext } from "react";

export const ThemeContext = createContext({
  isDarkMode: true,
  primary: "bg-zinc-900"
});
