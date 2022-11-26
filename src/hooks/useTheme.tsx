import { useState, useEffect, useCallback } from "react";

const storedIsDarkTheme = localStorage.getItem("dark");

export default function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(storedIsDarkTheme === "true");

  const changeTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!storedIsDarkTheme) {
      localStorage.setItem("dark", "false");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("dark", isDark.toString());
  }, [isDark]);

  return { changeTheme, isDark };
}
