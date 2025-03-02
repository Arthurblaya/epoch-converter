import CurrentEpoch from "@/components/currentEpoch";
import { consoleFont } from "./layout";
import EpochConverter from "@/components/epochConverter";
import HumanReadableConverter from "@/components/humanReadableConverter";

export default function Home() {
  return (
    <div className="p-4">
      <div className="min-h-screen container mx-auto flex flex-col max-w-screen-lg gap-4">
        <h1 className={`${consoleFont.className} text-primary text-3xl`}>
          Epoch & Unix Time Conversion Utility
        </h1>
        <CurrentEpoch />
        <EpochConverter />
        <HumanReadableConverter />
      </div>
    </div>
  );
}
