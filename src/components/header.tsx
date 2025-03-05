import { consoleFont } from "@/fonts/inconsolata";
import ClockIcon from "@/icons/clockIcon";
import ThemeChanger from "./themeChanger";
import TimeZoneSelector from "./timeZoneSelector";

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
        <div className="flex items-center gap-2 cursor-pointer">
          <ClockIcon className="size-7 text-primary" />
          <h1
            className={`${consoleFont.className} pl-1 sm:pl-0 text-sm sm:text-xl font-bold`}
          >
            <span className="text-primary">Epoch</span>{" "}
            <span className="">Converter</span>
          </h1>
        </div>

        <nav className="flex gap-4 items-center ml-auto">
          <TimeZoneSelector />
          <ThemeChanger className="mr-4" />
        </nav>
      </div>
    </header>
  );
}
