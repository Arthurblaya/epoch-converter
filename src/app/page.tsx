import DynamicConverters from "@/components/dynamicConverters";
import DocsProgrammingWithEpoch from "@/components/docsProgrammingWithEpoch";
import WhatIsEpoch from "@/components/whatIsEpoch";
import { consoleFont } from "@/fonts/inconsolata";

export default function Home() {
  return (
    <div className="p-4">
      <div className="min-h-screen container mx-auto flex flex-col max-w-screen-lg gap-4">
        <h1 className={`${consoleFont.className} text-primary text-3xl`}>
          Epoch & Unix Time Conversion Utility
        </h1>
        <DynamicConverters />
        <WhatIsEpoch />
        <DocsProgrammingWithEpoch />
      </div>
    </div>
  );
}
