import { consoleFont } from "./layout";

export default function Home() {
  return (
    <div className="p-4">
      <div className="min-h-screen container mx-auto flex max-w-screen-lg justify-between prose">
        <h1 className={`${consoleFont.className} text-primary`}>Epoch & Unix Time Conversion Utility</h1>
      </div>
    </div>
  );
}
