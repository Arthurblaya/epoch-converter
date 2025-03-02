import { consoleFont } from "@/app/layout";

export default function Header() {
  return (
    <header className="p-4">
      <div className="container mx-auto flex max-w-screen-lg items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1 className={`${consoleFont.className} text-lg leading-[1.2]`}>
            Epoch Converter
          </h1>
        </div>
      </div>
    </header>
  );
}
