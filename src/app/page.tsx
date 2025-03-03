import CurrentEpoch from "@/components/currentEpoch";
import DynamicConverters from "@/components/dynamicConverters";
import { consoleFont } from "@/fonts/inconsolata";

export default function Home() {
  return (
    <div className="p-4">
      <div className="min-h-screen container mx-auto flex flex-col max-w-screen-lg gap-4">
        <h1 className={`${consoleFont.className} text-primary text-3xl`}>
          Epoch & Unix Time Conversion Utility
        </h1>
        <CurrentEpoch />
        <DynamicConverters />
      </div>
    </div>
  );
}
