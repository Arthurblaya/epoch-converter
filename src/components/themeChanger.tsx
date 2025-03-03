"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "@/icons/moonIcon";
import SunIcon from "@/icons/sunIcon";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isDarkMode}
        onChange={() => setTheme(isDarkMode ? "light" : "dark")}
      />
      <div className="swap-off">
        <SunIcon className="size-7" />
      </div>
      <div className="swap-on">
        <MoonIcon className="size-7" />
      </div>
    </label>
  );
}
