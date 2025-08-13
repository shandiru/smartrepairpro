// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-md border px-3 py-1 text-sm
                  bg-white text-gray-900 border-gray-300
                  dark:bg-neutral-800 dark:text-gray-100 dark:border-neutral-700 ${className}`}
      aria-label="Toggle dark mode"
    >
      {isDark ? "🌙" : "☀️ "}
    </button>
  );
}
