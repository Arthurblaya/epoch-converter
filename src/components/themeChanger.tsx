"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "@/icons/moonIcon";
import SunIcon from "@/icons/sunIcon";

export default function ThemeChanger({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <label>
        <SunIcon className="size-7" />
      </label>
    );

  const isDarkMode = theme === "dark";

  return (
    <label className={"btn swap swap-rotate cursor-pointer " + className}>
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
