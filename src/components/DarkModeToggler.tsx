import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";


export default function DarkModeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div onClick={() => toggleTheme()}>
        {theme === "light" ? <Sun /> : <Moon />}
      </div>
    </>
  )
}
