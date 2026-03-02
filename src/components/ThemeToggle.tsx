import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}

      
      className="block  px-2  md:px-4 ring-primary/70 ring-1 py-0.5 md:py-1.5 rounded-xl bg-transparent   text-text hover:bg-primary/70  transition shadow shadow-bg" 
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
