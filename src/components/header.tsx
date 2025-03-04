import { consoleFont } from "@/fonts/inconsolata";
import ClockIcon from "@/icons/clockIcon";
import ThemeChanger from "./themeChanger";
import TimeZoneSelector from "./timeZoneSelector";

export default function Header() {
  return (
    <header className="p-4 backdrop-blur-lg sticky top-0 z-50">
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
        <div className="flex gap-4 items-center">
          <TimeZoneSelector />
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
}
