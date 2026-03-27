import { useEffect, useState } from "react";
import { getInitialTheme, saveTheme } from "../lib/storage";

export function useTheme() {
  const [isDark, setIsDark] = useState(() => getInitialTheme());

  useEffect(() => {
    document.body.classList.toggle("dark_mode", isDark);
    document.body.classList.toggle("light_mode", !isDark);
    saveTheme(isDark);
  }, [isDark]);

  return {
    isDark,
    toggleTheme: () => setIsDark((value) => !value),
  };
}
