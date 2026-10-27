import { useEffect, useState } from "react";

const themes = [
  { id: "blue", label: "Blue theme" },
  { id: "berry", label: "Berry theme" },
];

function getSavedTheme() {
  try {
    return localStorage.getItem("theme") || "blue";
  } catch {
    return "blue";
  }
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage not available */
    }
  }, [theme]);

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`swatch swatch-${t.id} ${theme === t.id ? "active" : ""}`}
          aria-label={t.label}
          aria-pressed={theme === t.id}
          title={t.label}
          onClick={() => setTheme(t.id)}
        />
      ))}
    </div>
  );
}
