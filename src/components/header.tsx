import { consoleFont } from "@/fonts/inconsolata";
import ClockIcon from "@/icons/clockIcon";
import ThemeChanger from "./themeChanger";
import TimeZoneSelector from "./timeZoneSelector";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 sticky top-0 bg-base-100 z-50 pr-16">
      <label
        aria-label="Open sidebar"
        htmlFor="my-drawer-2"
        className="btn fixed top-4 right-4 lg:hidden z-50"
      >
        ☰
      </label>

      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <ClockIcon className="size-7 text-primary" />
          <h1
            className={`${consoleFont.className} pl-1 sm:pl-0 text-sm sm:text-xl font-bold`}
          >
            <span className="text-primary">Timestamp</span>{" "}
            <span className="">Converter</span>
          </h1>
        </Link>

        <nav className="flex gap-2 items-center ml-auto">
          <TimeZoneSelector />
          <ThemeChanger className="lg:mr-0 mr-2" />
        </nav>
      </div>
    </header>
  );
}
